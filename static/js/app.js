document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
    const messageElement = document.getElementById('message');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const messagesParent = document.getElementById('messages');

    socket.on('connect', function () {
        messageElement.textContent = 'Connected to the server!';
    });

    socket.on('message', function (msg) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        item.textContent = msg;
        messagesParent.appendChild(item);
    });

    sendBtn.addEventListener('click', function () {
        const message = userInput.value;
        if (message) {
            socket.emit('client_message', message);
            userInput.value = '';
        }
    });
});
