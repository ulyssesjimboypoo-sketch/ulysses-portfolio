import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.28)",
        glow: "0 0 40px rgba(34, 211, 238, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
