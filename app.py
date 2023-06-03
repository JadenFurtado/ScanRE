from flask import Flask
from flask import request, Response, make_response, jsonify
import json

app = Flask(__name__)

@app.route("/")
def insertUser():
    resp = make_response(json.load(open("/home/jaden/projects/temp/DVWA.json","r")))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-type']="application/json"
    return resp