from flask import jsonify
from flask import Flask, request
from celery import Celery
from Scanner import CodeScanner

from celery.utils.log import get_task_logger
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()
logger = get_task_logger(__name__)

app = Flask(__name__)

app.config["CELERY_BROKER_URL"] = os.getenv("CELERY_BROKER_URL")

celery = Celery(app.name, broker=app.config["CELERY_BROKER_URL"])
celery.conf.update(app.config)

ART = """


░█▀▄▀█ █▀▀ █▀▀▀ █▀▀█ ░█▄─░█ █▀▀ █▀▀█ █▀▀▄ 
░█░█░█ █▀▀ █─▀█ █▄▄█ ░█░█░█ █▀▀ █▄▄▀ █──█ 
░█──░█ ▀▀▀ ▀▀▀▀ ▀──▀ ░█──▀█ ▀▀▀ ▀─▀▀ ▀▀▀─


"""

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
    repositoryLink = request.args.get("repositoryLink")
    repoLink = "https://TsecBeProject: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@github.com/JadenFurtado/geoAbuseIPDB.git"
    path = request.args.get("path")
    path = "test/"
    repositoryName = request.args.get("repositoryName")
    repoName = "geoAbuseIPDB"
    scan.delay(repositoryLink,path,repositoryName)
    return jsonify({'status': 'ok'})

if __name__=='__main__':
    app.run()