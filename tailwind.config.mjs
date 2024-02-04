/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        Mdtech: {
          primary: "#f9d923",

          secondary: "#9b9b9b",

          accent: "#ffffff",

          neutral: "#ffffff",

          "base-100": "#1f2937",

          info: "#38bdf8",

          success: "#34d399",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
    ],
  },
};
