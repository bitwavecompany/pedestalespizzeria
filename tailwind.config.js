import theme from './src/theme/theme.ts';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      spacing: theme.spacing,
      borderRadius: theme.borders.radius,
      boxShadow: theme.shadows
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Desactiva los estilos base de Tailwind que podrían entrar en conflicto
  }
}

