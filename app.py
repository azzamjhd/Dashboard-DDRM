from flask import Flask, send_from_directory
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='vue-socketio-app/dist')
app.config['SECRET_KEY'] = 'secret!'
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@socketio.on('connect')
def handle_connect(sid):
    print('Client connected: ', sid)

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('client_message')
def handle_client_message(data):
    print(f'Received message from client: {data}')
    emit('message', data, broadcast=True)
@socketio.on('message')
def handle_message(data):
    print(f'Received message from client: {data}')
    emit('message', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0')