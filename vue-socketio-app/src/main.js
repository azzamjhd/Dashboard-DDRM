import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue';
import Chat from './views/chat.vue';
import Dash from './views/dash.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/dash', component: Dash },
        { path: '/chat', component: Chat }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
