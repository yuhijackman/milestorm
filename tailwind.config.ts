import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        brand: {
          '25': 'hsl(213, 70%, 97%)',
          '50': 'hsl(213, 70%, 92%)',
          '100': 'hsl(213, 70%, 85%)',
          '200': 'hsl(213, 70%, 75%)',
          '300': 'hsl(213, 70%, 65%)',
          '400': 'hsl(213, 70%, 55%)',
          '500': 'hsl(213, 70%, 45%)',
          '600': 'hsl(213, 70%, 40%)',
          '700': 'hsl(213, 70%, 35%)',
          '800': 'hsl(213, 70%, 30%)',
          '900': 'hsl(213, 70%, 25%)',
          '950': 'hsl(213, 70%, 20%)',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        text: 'hsl(var(--text))',
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
      },
    },
  },
  plugins: [],
};
export default config;
