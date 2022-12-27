/*
 * @Date: 2022-12-28 01:00:55
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-28 01:01:57
 * @FilePath: /element-pp/play/vite-env.d.ts
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}