/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "blue-light": "#8FB2F5",
        gray: {
          100: "#FAFAFA",
          200: "#BFBFD4",
          300: "#ABABC4",
          400: "#7F7F98",
          500: "#3B3B54",
          600: "#22222F",
          700: "#1C1C27",
          800: "#16161F",
          900: "#13131A",
        },
      },
      fontSize: {
        "heading-hg": ["6rem", { lineHeight: "100%", fontWeight: "800" }],
        "heading-xl": ["3rem", { lineHeight: "120%", fontWeight: "800" }],
        "heading-lg": ["2rem", { lineHeight: "140%", fontWeight: "700" }],
        "heading-md": ["1.25rem", { lineHeight: "140%", fontWeight: "700" }],
        "heading-sm": ["1rem", { lineHeight: "140%", fontWeight: "700" }],
        "heading-xs": ["0.875rem", { lineHeight: "140%", fontWeight: "700" }],
        lg: ["1.25rem", { lineHeight: "140%", fontWeight: "400" }],
        md: ["1rem", { lineHeight: "140%", fontWeight: "400" }],
        sm: ["0.875rem", { lineHeight: "140%", fontWeight: "400" }],
        xs: ["0.75rem", { lineHeight: "140%", fontWeight: "400" }],
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
