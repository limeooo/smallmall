import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element中的Toast
import "element3/lib/theme-chalk/index.css";

createApp(App).use(store).use(router).mount('#app')
