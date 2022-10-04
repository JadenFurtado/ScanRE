from app import app
from flask import Flask

# returns the login page
@app.route("/login")
def userLogin():
    return "login"

# logs the user out
@app.route("/logout")
def userLogout():
    return "logout"

# return the profile page
@app.route("/profile")
def userProfile():
    return "profile"

