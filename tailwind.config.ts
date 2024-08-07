import { BASE_PATH } from "./src/lib/composables/production";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        _bgDarkGray: "#3D3D3D",
        _bgLightGray: "#535353",
        _lightGrayText: "#B8B8B8",
        _darkGrayText: "#5B5B5B",
        _goldColor: "#d4af37",

        _lightBg: "#fcfcfc",
        _lightBgRed: "#f27474",
        _lightBgGradient: "#ffc2ba",
        _lightSeparator: "#dbdbdb",

        _darkBg: "#101013",
        _darkBgRed: "#D64444",
        _darkSlateBg: "#101725",
        _darkBgGradient: "#360606",
        _darkSeparator: "#474747",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        joker: `url('${BASE_PATH}assets/img/joker.png')`,
        "black-background": `url('${BASE_PATH}assets/img/black-background.png')`,
        "white-background": `url('${BASE_PATH}assets/img/white-background.png')`,
        "blurry-gradient-bg": `url('${BASE_PATH}assets/img/blurry-gradient-bg.svg')`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
