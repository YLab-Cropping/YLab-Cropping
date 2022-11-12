import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios  from '@/utils/request.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/icon/iconfont.css'

import '@/assets/css/global.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import 'vue-cropper/dist/index.css'

const app = createApp(App)

app.config.globalProperties.$axios=axios

app.use(store).use(router).use(ElementPlus).mount('#app')