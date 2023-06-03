from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_migrate import Migrate
# from flask_login import (
#     UserMixin,
#     login_user,
#     LoginManager,
#     current_user,
#     logout_user,
#     login_required,
# )
import os
# from dotenv import load_dotenv
from app import routes #, models
#from app import save_view
app = Flask(__name__)
app.config["CELERY_BROKER_URL"] = 'redis://127.0.0.1:6379/0'

# db = SQLAlchemy(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# app.config['SECRET_KEY'] = 'secretkey'




