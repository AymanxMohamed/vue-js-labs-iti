import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Main from './Main.vue'
// createApp(Main).use(router).mount('#app')
createApp(App).use(router).mount('#app')
