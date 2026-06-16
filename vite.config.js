import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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
