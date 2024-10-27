/*
 * @Author: Anixuil
 * @Date: 2024-10-27 13:12:43
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-27 14:57:27
 * @Description: vite配置文件
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2001,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // 使用dart-sass
      }
    }
  }
})
