import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';

const customServerPlugin = () => ({
  name: 'custom-server-api',
  configureServer(server) {
    server.middlewares.use('/api', (req, res, next) => {
      // Endpoint to save products.json
      if (req.method === 'POST' && req.url === '/save-products') {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', () => {
          try {
            const filePath = path.resolve(process.cwd(), 'src/products.json');
            fs.writeFileSync(filePath, body); // Writes the JSON array directly
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            console.error('Error saving products:', e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
        return;
      }

      // Endpoint to upload image (expects JSON with base64)
      if (req.method === 'POST' && req.url === '/upload-image') {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', () => {
          try {
            const { filename, image } = JSON.parse(body);
            // Remove prefix: "data:image/png;base64,"
            const base64Data = image.split(';base64,').pop();
            const filePath = path.resolve(process.cwd(), 'public', filename);

            fs.writeFileSync(filePath, base64Data, { encoding: 'base64' });

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, url: `/${filename}` }));
          } catch (e) {
            console.error('Error uploading image:', e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
        return;
      }

      next();
    });
  },
});

export default defineConfig({
  plugins: [react(), customServerPlugin()],
});
