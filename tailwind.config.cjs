/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Roboto"],
      //   body: ["Roboto"],
      //   display: ["Roboto"],
      //   serif: ["Roboto"],
      // },
      colors: {
        "brand-primary": "#25233B",
        "brand-secondary": "#393359",
        "brand-tertiary": "#5C527F",
        "brand-quaternary": "#a855f7",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("prettier-plugin-tailwindcss"),
  ],
};
