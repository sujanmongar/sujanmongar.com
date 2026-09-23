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

  // Content Security Policy. Astro hashes its own inline scripts/styles and
  // emits a <meta> CSP per page; the directives below cover everything else
  // the site loads. frame-ancestors can't live in a meta CSP, so clickjacking
  // is covered by X-Frame-Options in public/_headers.
  security: {
    csp: {
      // Cloudflare injects its Web Analytics beacon into every response, so it
      // has to be allowed explicitly or the policy blocks it.
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'] },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api.web3forms.com https://cloudflareinsights.com https://static.cloudflareinsights.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'"
      ]
    }
  },

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
