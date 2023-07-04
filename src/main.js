import { createApp } from 'vue';
import App from './App.vue';
import { appRouter } from './appRouter';
import {createPinia } from 'pinia';

const app = createApp(App); 
const pinia =  createPinia();

app.use(appRouter);
app.use(pinia);

app.mount('#app')
