import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: 'https://mdtech.com.co',
  integrations: [tailwind(), sitemap(), compress(), metaTags()]
});