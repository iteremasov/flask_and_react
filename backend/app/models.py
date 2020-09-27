from datetime import datetime
from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(64), index=True, unique=True)
    last_name = db.Column(db.String(64), index=True, unique=True)
    patronymic = db.Column(db.String(64), index=True, unique=True)
    phone = db.Column(db.String(15), index=True, unique=True)
    adress = db.Column(db.String(64), index=True, unique=True)
    iin = db.Column(db.String(128))
