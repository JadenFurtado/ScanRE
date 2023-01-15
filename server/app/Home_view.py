
from app import app
from flask import render_template,request

@app.route("/")
def index():
    return '"render_template("public/UserSignup.html")"'

@app.route("/data")
def login():
    return 'render_template("public/login.html")'