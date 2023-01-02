/*
 * @Date: 2023-01-02 20:32:23
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-02 22:29:35
 * @FilePath: /element-pp/packages/utils/type.ts
 */
export interface EventItem {
  key?: string | number
  title?: string
  start?: number
  end?: number
  top?: string
  bottom?: string
  [key: string]: any
}
