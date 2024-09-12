<template>
  <div class="container">
    <h1 class="text-center">Differential Drive Mobile Robot</h1>
    <div>
      <router-link to="/chat" class="btn btn-primary">Chat</router-link>
      <router-link to="/dash" class="btn btn-primary">Dash</router-link>
    </div>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
