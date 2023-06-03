from app import app
from flask import jsonify
from flask import Flask, request
from celery import Celery
from app.Controllers.Scanner import CodeScanner
from celery.utils.log import get_task_logger
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()
logger = get_task_logger(__name__)

#app = Flask(__name__)

celery = Celery(app.name, broker=app.config["CELERY_BROKER_URL"])
celery.conf.update(app.config)

@celery.task()
def scan(repositoryLink,path,repositoryName,finalOutput,multipleDirectories=0):
    if multipleDirectories==0:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput)
        loop.run_until_complete(scanObj.getCode())
        loop.run_until_complete(scanObj.scanCode())
        loop.run_until_complete(scanObj.importScanData())
        loop.run_until_complete(scanObj.cleanUp())
        return "success"
    else:
        for directory in path:
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
            scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput)
            loop.run_until_complete(scanObj.getCode())
            loop.run_until_complete(scanObj.scanCode())
        return "success"

@celery.task()
def deepScan(repositoryLink,path,repositoryName,finalOutput):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput)
    loop.run_until_complete(scanObj.getCode())
    loop.run_until_complete(scanObj.scanWithORTandDeepSemgrep())
    loop.run_until_complete(scanObj.cleanUp())
    return "success"

@app.route('/',methods=['GET','POST'])
def add_task():
    repositoryLink = request.args.get("repositoryLink")
    path = request.args.get("path")
    repositoryName = request.args.get("repositoryName")
    finalOutput = request.args.get("finalOutput")
    scan.delay(repositoryLink,path,repositoryName,finalOutput)
    return jsonify({'status': 'ok'})

@app.route('/scan',methods=['GET','POST'])
def add_new_task():
    repositoryLink = request.args.get("repositoryLink")
    path = request.args.get("paths")
    repositoryName = request.args.get("repositoryName")
    finalOutput = request.args.get("finalOutput")
    scan.delay(repositoryLink,path,repositoryName,finalOutput,1)
    return jsonify({'status': 'ok'})
@app.route('/deepScan', methods=['GET','POST'])
def add_ort():
    repositoryLink = request.args.get("repositoryLink")
    path = request.args.get("path")
    repositoryName = request.args.get("repositoryName")
    finalOutput = request.args.get("finalOutput")
    deepScan.delay(repositoryLink,path,repositoryName,finalOutput)
    return jsonify({'status': 'ok'})
