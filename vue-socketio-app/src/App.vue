<template>
  <div id="app" class="container mt-5 text-center">
    <h1 class=" mb-5">Vue.js Flask-SocketIO</h1>
    <b-input-group :prepend="username" class="mt-3 mb-3 md" size="md">
      <b-icon icon="person-fill"></b-icon>
      <b-form-input v-model="message" placeholder="Enter a message"></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-primary" @click="sendMessage">Send message</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-form-textarea v-model="response" rows="5" readonly></b-form-textarea>
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
