import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site — реальный домен сайта (нужен для карты сайта и ссылок).
export default defineConfig({
  site: 'https://www.pichugster.com',
  integrations: [sitemap()],
});
