import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { URL_API } from './configs/api'

axios.defaults.baseURL = URL_API

import './assets/main.css'

const app = createApp(App)

app.use(router) //Usa as rotas criadas em /src/router/index.js

app.mount('#app')
