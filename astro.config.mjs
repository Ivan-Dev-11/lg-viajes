import { defineConfig } from 'astro/config';

export default defineConfig({
  // Quitamos la línea de 'integrations: [tailwind()]' porque 
  // ahora lo manejamos directo desde el CSS y PostCSS
});