from app import app
from flask import jsonify
from flask import Flask, request
from celery import Celery
from app.Controllers.Scanner import CodeScanner
from celery.utils.log import get_task_logger
import os
import json
from dotenv import load_dotenv
import asyncio

load_dotenv()
logger = get_task_logger(__name__)

#app = Flask(__name__)

celery = Celery(app.name, broker=app.config["CELERY_BROKER_URL"])
celery.conf.update(app.config)

@celery.task()
def scan(repositoryLink,path,repositoryName,finalOutput,multipleDirectories=0):
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput)
        loop.run_until_complete(scanObj.getCode())
        loop.run_until_complete(scanObj.scanCode())
        return json.load(open(finalOutput+"/"+repositoryName+".json","r"))

@app.route('/',methods=['GET','POST'])
def add_task():
    repositoryLink = request.args.get("repositoryLink")
    print(repositoryLink)
    path = os.getenv("clonePath")
    values = repositoryLink.split("/")
    repositoryName = values[4].split(".")[0]
    finalOutput = os.getenv("clonePath")
    result = scan.delay(repositoryLink,path,repositoryName,finalOutput)
    print(result)
    # resp.headers['Access-Control-Allow-Origin'] = '*'
    # resp.headers['Location'] = 'https://scanre.loca.lt/engagement/3'
    # return resp
    return jsonify(result.get())
