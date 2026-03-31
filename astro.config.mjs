import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://floor-boss.netlify.app',
  integrations: [tailwind()],
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
});
