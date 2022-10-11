from app import app
from flask import Flask
from app.Controllers import Semgrep
from flask import request
# returns the login page
@app.route("/login")
def userLogin():
    return "login"

# logs the user out
@app.route("/logout")
def userLogout():
    s = Semgrep.SemgrepController()
    print(s)
    return "logout"

# return the profile page
@app.route("/profile")
def userProfile():
    return "profile"

@app.route("/",methods = ["POST"])
def requestD():
    print(request.data)
    print(request.form)
    return "profile"