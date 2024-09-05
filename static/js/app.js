document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
    const messageElement = document.getElementById('message');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');

    socket.on('connect', function () {
        messageElement.textContent = 'Connected to the server!';
    });

    socket.on('message', function (msg) {
        messageElement.textContent = msg.data;
    });

    sendBtn.addEventListener('click', function () {
        const message = userInput.value;
        if (message) {
            socket.emit('client_message', message);
            userInput.value = '';
        }
    });
});
