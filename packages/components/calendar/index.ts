/*
 * @Date: 2022-12-28 23:42:41
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-29 23:51:40
 * @FilePath: /element-pp/packages/components/calendar/index.ts
 */
import type { App, Plugin } from 'vue'
import EpCalendar from './src/EpCalendar.vue'

export const Calendar: Plugin = {
  install(app: App) {
    app.component('EpCalendar', EpCalendar)
  },
}

export default Calendar

export * from './src/EpCalendar.vue'
