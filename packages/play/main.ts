/*
 * @Date: 2022-12-28 00:59:10
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-29 00:29:17
 * @FilePath: /element-pp/packages/play/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { ElementPp } from 'element-pp'

const app = createApp(App)
app.use(ElementPp)
app.mount('#app')
