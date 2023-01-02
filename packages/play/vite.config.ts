/*
 * @Date: 2022-12-27 23:47:11
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-29 00:37:38
 * @FilePath: /element-pp/packages/play/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: '.',
  plugins: [vue()],
  server: {
    port: 7777,
  },
})
