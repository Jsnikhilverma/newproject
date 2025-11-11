import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        "Inknut-Antiqua": ['"Inknut Antiqua"', "serif"],
      },
      keyframes: {
        "marquee-rtl": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-rtl": "marquee-rtl 50s linear infinite",
      },
    },
  },
});
