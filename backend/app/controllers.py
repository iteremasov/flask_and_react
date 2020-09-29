from app import db
from app import models
from app import cipher
from app import admin_password
from app import create_access_token
import json


def add_controller(data):
    iin = data['iin']
    iin2 = cipher.encrypt(iin.encode())
    iin = iin2.decode()
    user = models.User(
        first_name=data['name'],
        last_name=data['surname'],
        patronymic=data['patronymic'],
        phone=data['phone'],
        adress=data['adress'],
        iin=iin
    )
    result = True
    try:
        db.session.add(user)
        db.session.commit()
    except:
        result = False
    return result


def login(password):
    if password == admin_password:
        token = create_access_token(identity='admin')
        return {'success': True, 'token': token}
    else:
        return {'success': False, 'token': ''}


def admin():
    def decode_iin(iin):
        iin = iin.encode()
        iin = cipher.decrypt(iin)
        iin = iin.decode()
        return iin

    try:
        users = models.User.query.all()
        result = []
        for item in users:
            iin = decode_iin(item.iin)
            user = {}
            user['name'] = item.first_name
            user['surname'] = item.last_name
            user['patronymic'] = item.patronymic
            user['phone'] = item.phone
            user['adress'] = item.adress
            user['iin'] = iin
            result.append(user)
        return {'success': True, 'users': result}
    except:
        return {'success': False, 'users': []}
