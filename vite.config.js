import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Permite abrir /implantes, /clareamento etc. direto no `npm run preview` */
function spaFallback() {
  return {
    name: 'spa-fallback',
    configurePreviewServer(server) {
      return () => {
        server.middlewares.use((req, _res, next) => {
          if (req.method !== 'GET' || !req.url) return next()
          const pathOnly = req.url.split('?')[0]
          if (pathOnly.startsWith('/@') || pathOnly.startsWith('/node_modules')) return next()
          if (pathOnly.includes('.') && !pathOnly.endsWith('.html')) return next()
          if (pathOnly !== '/' && pathOnly !== '/index.html') {
            req.url = '/index.html'
          }
          next()
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
})
