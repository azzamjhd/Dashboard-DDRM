<template>
  <div id="app" class="container mt-5 text-center">
    <h1 class="title mb-5">Vue.js Flask-SocketIO</h1>
    <div class="mb-3 input-group">
      <input class="form-control" type="text" v-model="message" placeholder="Enter a message">
      <button class="btn btn-outline-primary" type="button" @click="sendMessage">Send message</button>
    </div>
    <textarea name="responses" id="resp" class="form-control" rows="5" v-model="response" readonly></textarea>
  </div>
</template>

<script>
import io from 'socket.io-client';


export default {
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

    this.socket.on('message', (data) => {
      this.response = data.username + ': ' + data.message + '\n' + this.response;
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
    }
  },
  beforeUnmount() {
    this.socket.off('response');
  }
}
</script>

<style>
body {
    background-color: #f8f9fa;
}
</style>
