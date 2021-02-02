import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.use(VueRouter)
app.mount('#app')
