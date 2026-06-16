import { defineConfig } from 'vite';
import { resolve } from 'path';

// Evaluamos si el build se está ejecutando en los servidores de GitHub Actions
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // Si es GH Pages, usa la subcarpeta. Si no, usa la raíz '/' para tu hosting real.
  base: isGitHubPages ? '/ElPerritoBoby_page/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        propuesta: resolve(__dirname, 'propuesta.html'),
        objetivos: resolve(__dirname, 'objetivos.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
});
