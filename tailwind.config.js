import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash)"],
      },
      backgroundImage: {
        "hero-pattern": 'url("/background.svg")',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "system",
      layout: {
        radius: {
          small: "2px",
          medium: "4px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "4px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#e26c00",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#0fa968",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#bb4802",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#0fa968",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
    require("tailwindcss-animate"),
  ],
};
