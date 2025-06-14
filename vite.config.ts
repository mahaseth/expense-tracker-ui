import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // Automatically update the service worker
      manifest: {
        name: 'Expense tracker',
        short_name: 'Exp tracker',
        description: 'Your app description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/expense-tracker-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/expense-tracker-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        "screenshots": [
            {
              "src": "screenshots/expense-tracker-wide.png",
              "sizes": "1024x585",
              "type": "image/png",
              "form_factor": "wide"
            },
            {
              "src": "screenshots/expense-tracker-portrait.png",
              "sizes": "512x1024",
              "type": "image/png",
              "form_factor": "narrow"
            }
          ],
          "display": "standalone",
          "background_color": "#ffffff",
          },
    }),
  ],
  base: '/expense-tracker-ui/',
});
