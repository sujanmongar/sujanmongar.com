// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sujanmongar.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],

  // Per-format quality, measured against the lossless masters: AVIF 70 is
  // sharper than the old WebP-92-from-lossy pipeline at ~58% of the bytes.
  // Components don't pass `quality`, so this applies to every image.
  // Output filenames don't hash this config: after changing it, delete
  // node_modules/.astro so cached images are re-encoded (and clear the
  // Cloudflare Workers Builds build cache, if it's ever enabled).
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: { avif: { quality: 70 }, webp: { quality: 85 } }
    }
  }
});
