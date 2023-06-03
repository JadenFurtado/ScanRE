from app import app
from flask import jsonify
from flask import Flask, request, Response
from celery import Celery
from app.Controllers.Scanner import CodeScanner
from celery.utils.log import get_task_logger
import os
import json
from dotenv import load_dotenv
import asyncio
import validators
from flask import Flask,session,render_template,request,redirect,url_for
# load_dotenv()
logger = get_task_logger(__name__)

#app = Flask(__name__)

celery = Celery(app.name, broker=app.config["CELERY_BROKER_URL"])
celery.conf.update(app.config)

#@celery.task()
def scan(repositoryLink,path,repositoryName,finalOutput,multipleDirectories=0):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput)
    loop.run_until_complete(scanObj.getCode())
    loop.run_until_complete(scanObj.scanCode())
    loop.run_until_complete(scanObj.cleanUp())
    return "success"

@celery.task()
def deepScan(repositoryLink,path,repositoryName,finalOutput,ortPath):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput,ortPath)
    loop.run_until_complete(scanObj.getCode())
    loop.run_until_complete(scanObj.scanWithORTandDeepSemgrep())
    loop.run_until_complete(scanObj.cleanUp())
    return "success"

@app.route('/',methods=['GET','POST'])
def add_task():
        repositoryLink = request.args.get("repositoryLink")
        print(repositoryLink)
        if validators.url(repositoryLink):
                path = os.getenv("clonePath")
                values = repositoryLink.split("/")
                repositoryName = values[4].split(".")[0]
                finalOutput = os.getenv("clonePath")
                scan(repositoryLink,path,repositoryName,finalOutput)
                resp = Response(str(json.load(open(finalOutput+"/"+repositoryName+".json","r"))))
                resp.headers['Access-Control-Allow-Origin'] = '*'
                return resp
        else:
                resp = Response('{"error":"invalid git repository given"}')
                # print(result)
                # resp.headers['Access-Control-Allow-Origin'] = '*'
                # resp.headers['Location'] = 'https://scanre.loca.lt/engagement/3'
                # return resp
                resp.headers['Access-Control-Allow-Origin'] = '*'
                return resp

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='POST':
        session['username']=request.form.get('username')
        return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username',None)
    return redirect(url_for('index'))

       
@app.route('/deepScan', methods=['GET','POST'])
def add_ort():
    repositoryLink = request.args.get("repositoryLink")
    path = request.args.get("path")
    repositoryName = request.args.get("repositoryName")
    finalOutput = request.args.get("finalOutput")
    ortPath = '/home/unixusername/BEProject/ort/cli/build/install/ort/bin/' #temp hard code
    deepScan.delay(repositoryLink,path,repositoryName,finalOutput,ortPath)
    return jsonify({'status': 'ok'})

