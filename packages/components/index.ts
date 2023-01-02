/*
 * @Date: 2022-12-29 00:11:40
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-29 23:12:21
 * @FilePath: /element-pp/packages/components/index.ts
 */
import type { App, Plugin } from 'vue'

import ElCalendar from './calendar'

export * from './calendar'

export const ElementPp: Plugin = {
  install(app: App) {
    app.use(ElCalendar)
  },
}

export default ElementPp
