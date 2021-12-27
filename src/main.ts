import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import vmodal from 'vue-js-modal'
import 'vue-js-modal/dist/styles.css'

createApp(App).use(store).use(vmodal).use(router).mount('#app')
