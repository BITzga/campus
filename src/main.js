import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './route'
import store from './store'
createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
