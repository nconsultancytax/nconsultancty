// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // replace with final domain
  site: 'https://www.naccountstax.com',

  integrations: [
    tailwind(),
    sitemap()
  ],

  output: 'static',
})