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
def scan(repositoryLink,path,repositoryName):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    scanObj = CodeScanner(repositoryLink,path,repositoryName)
    loop.run_until_complete(scanObj.getCode())
    loop.run_until_complete(scanObj.scanCode())
    loop.run_until_complete(scanObj.cleanUp())
    return "success"

@app.route('/')
def add_task():
    repositoryLink = request.get.args("repositoryLink")
    path = request.get.args("path")
    repositoryName = request.args.get("repositoryName")
    scan.delay(repositoryLink,path,repositoryName)
    return jsonify({'status': 'ok'})
