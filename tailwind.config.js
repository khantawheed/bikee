/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "15px",
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1440px',
  },
  fontFamily: {
    rajdhani: 'var(--font-rajdhani)',
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: '#222222',
        hover: '2f2f2f'
      },
      accent: {
        DEFAULT: '#ed1d24',
        hover: 'd6001c'
      }
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
    },
  },
};
export const plugins = [require("tailwindcss-animate")];