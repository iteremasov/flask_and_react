from app import free_blueprint, closed_blueprint
from app import app
from flask import jsonify, request
from flask import make_response
from app import controllers
from app import models
import json


@free_blueprint.route('/add', methods=['GET', 'POST'])
def add():
    json_data = json.loads(request.data)
    result = controllers.add_controller(json_data)
    if result:
        return app.response_class(status=200)
    return app.response_class(status=501)


@free_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    json_data = json.loads(request.data)
    result = controllers.login(json_data['password'])
    if result['success']:
        token = result['token']
        return app.response_class(status=200, response=json.dumps({'token': token}))
    return app.response_class(status=501)


@closed_blueprint.route('/users', methods=['GET'])
def admin():
    print('/admin')
    result = controllers.admin()
    if result['success']:
        return app.response_class(status=200, response=json.dumps({'users': result['users']}))
    else:
        return app.response_class(status=501)


app.register_blueprint(free_blueprint, url_prefix='/api')
app.register_blueprint(closed_blueprint, url_prefix='/api/admin')

print(app.url_map)