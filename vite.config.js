import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'force-module-mime-type',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const urlPath = req.url.split('?')[0];
          if (urlPath.endsWith('.jsx') || urlPath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
          }
          next();
        });
      }
    }
  ],
})
