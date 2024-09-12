<template>
    <div id="app" class="container mt-5">
      <div class="input-group my-3 shadow-sm">
        <span class="input-group-text text-bg-success" id="message-prefix">Username: {{ username }}</span>
        <input type="text" class="form-control" v-model="message" placeholder="Enter a message" aria-label="Message" aria-describedby="message-prefix">
        <button class="btn btn-primary" @click="sendMessage">Send message</button>
      </div>
      <!-- <textarea class="form-control overflow-hidden shadow" v-model="response" rows="5" readonly></textarea> -->
  
      <div class="h-50 overflow-hidden">
        <h2 class="text-center">Messages</h2>
        <div class="list-group list-group-flush" id="messages">
          <!-- Received Messages goes here -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import io from 'socket.io-client';
  
  export default {
    name: 'ChatPage',
    data() {
      return {
        message: '',
        response: '',
        username: '',
      };
    },
    mounted() {
      this.socket = io('http://localhost:5000');
      this.username = Math.random().toString(36).substring(7);
  
      const messageList = document.getElementById('messages');
  
      this.socket.on('message', (data) => {
        this.response = data.username + ': ' + data.message + '\n' + this.response;
        const messageItem = document.createElement('div');
        messageItem.classList.add('list-group-item');
        messageItem.innerHTML = data.username == this.username ? `
          <div class="list-group list-group-horizontal">
            <span class="list-group-item text-bg-success" >${data.username}</span>
            <span class="list-group-item flex-fill border-0">${data.message}</span>
          </div> ` : `
          <div class="list-group list-group-horizontal">
            <span class="list-group-item text-bg-primary" >${data.username}</span>
            <span class="list-group-item flex-fill border-0">${data.message}</span>
          </div>`;
        messageList.insertBefore(messageItem, messageList.firstChild);
      });
      this.socket.on('connect', () => {
        console.log('Connected to the server: ', this.socket.id);
      });
    },
    methods: {
      sendMessage() {
        if (this.message !== '') {
          const data = {
            username: this.username,
            message: this.message
          };
          this.socket.emit('message', data);
        }
        this.message = '';
      },
    },
    beforeUnmount() {
      this.socket.off('response');
    }
  }
  </script>