import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/url': {
  //       //target: 'http://localhost:5000',
  //       //target: 'https://tmdb-backend-api.onrender.com',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: path => path.replace('/url', '')
  //     }
  //   }
  // }
})
