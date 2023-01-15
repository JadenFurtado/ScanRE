from flask import Flask,session
#from flask_session import Session

app = Flask(__name__)
app.secret_key = 'Abcd'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'swaasthya'
#app.config['SESSION_PERMANENT'] = False
#app.config['SESSION_TYPE'] = 'filesystem'

from app import Home_view