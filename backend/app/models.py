from datetime import datetime
from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(64), index=True, unique=False)
    last_name = db.Column(db.String(64), index=True, unique=False)
    patronymic = db.Column(db.String(64), index=True, unique=False)
    phone = db.Column(db.String(15), index=True, unique=False)
    adress = db.Column(db.String(64), index=True, unique=False)
    iin = db.Column(db.String(128))
