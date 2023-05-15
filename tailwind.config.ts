import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../../public/sean-pollock-PhYq704ffdA-unsplash.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fcd34d",
          secondary: "#facc15",
          accent: "#d6d3d1",
          neutral: "#d1d5db",
          "base-100": "#f3f4f6",
          info: "#fdba74",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
