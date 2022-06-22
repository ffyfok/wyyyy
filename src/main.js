/*
 * @Author: zhang
 * @Date: 2022-06-02 16:49:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-08 10:57:45
 * @Descripttion: 
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import 'default-passive-events'

const app = createApp(App)
getVant(app)
app.use(store).use(router).mount('#app')