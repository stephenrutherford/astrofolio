import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://rutherford.dev",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image(),
    prefetch({
      // Allow up to three links to be prefetched concurrently
      throttle: 3,
    }),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "material-palenight",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  // astro-icon
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
