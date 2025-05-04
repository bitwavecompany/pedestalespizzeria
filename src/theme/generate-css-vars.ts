// src/theme/generate-css-vars.ts
import { colors } from './theme';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el equivalente a __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para convertir color hex a RGB
function hexToRgb(hex: string): string {
  // Eliminar # si existe
  hex = hex.replace('#', '');
  
  // Convertir a RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

// Generar variables CSS
function generateCssVars(): string {
  let css = `/* Archivo generado automáticamente por generate-css-vars.ts */
/* No modificar manualmente - Última generación: ${new Date().toISOString()} */

:root {
`;
  
  // Colores principales
  css += `  /* Colores principales */\n`;
  
  // Primary
  css += `  --ion-color-primary: ${colors.primary};\n`;
  css += `  --ion-color-primary-rgb: ${hexToRgb(colors.primary)};\n`;
  css += `  --ion-color-primary-contrast: ${colors.white};\n`;
  css += `  --ion-color-primary-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `  --ion-color-primary-shade: ${colors.primaryDark};\n`;
  css += `  --ion-color-primary-tint: ${colors.primaryLight};\n\n`;
  
  // Secondary
  css += `  --ion-color-secondary: ${colors.secondary};\n`;
  css += `  --ion-color-secondary-rgb: ${hexToRgb(colors.secondary)};\n`;
  css += `  --ion-color-secondary-contrast: ${colors.black};\n`;
  css += `  --ion-color-secondary-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `  --ion-color-secondary-shade: ${colors.secondaryDark};\n`;
  css += `  --ion-color-secondary-tint: ${colors.secondaryLight};\n\n`;
  
  // Tertiary
  css += `  --ion-color-tertiary: ${colors.tertiary};\n`;
  css += `  --ion-color-tertiary-rgb: ${hexToRgb(colors.tertiary)};\n`;
  css += `  --ion-color-tertiary-contrast: ${colors.white};\n`;
  css += `  --ion-color-tertiary-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `  --ion-color-tertiary-shade: ${colors.tertiaryDark};\n`;
  css += `  --ion-color-tertiary-tint: ${colors.tertiaryLight};\n\n`;
  
  // Colores de estado
  css += `  /* Colores de estado */\n`;
  
  // Success
  css += `  --ion-color-success: ${colors.success};\n`;
  css += `  --ion-color-success-rgb: ${hexToRgb(colors.success)};\n`;
  css += `  --ion-color-success-contrast: ${colors.white};\n`;
  css += `  --ion-color-success-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `  --ion-color-success-shade: ${colors.success};\n`; // Podríamos calcular un shade
  css += `  --ion-color-success-tint: ${colors.success};\n\n`; // Podríamos calcular un tint
  
  // Warning
  css += `  --ion-color-warning: ${colors.warning};\n`;
  css += `  --ion-color-warning-rgb: ${hexToRgb(colors.warning)};\n`;
  css += `  --ion-color-warning-contrast: ${colors.black};\n`;
  css += `  --ion-color-warning-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `  --ion-color-warning-shade: ${colors.warning};\n`; // Podríamos calcular un shade
  css += `  --ion-color-warning-tint: ${colors.warning};\n\n`; // Podríamos calcular un tint
  
  // Danger
  css += `  --ion-color-danger: ${colors.danger};\n`;
  css += `  --ion-color-danger-rgb: ${hexToRgb(colors.danger)};\n`;
  css += `  --ion-color-danger-contrast: ${colors.white};\n`;
  css += `  --ion-color-danger-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `  --ion-color-danger-shade: ${colors.danger};\n`; // Podríamos calcular un shade
  css += `  --ion-color-danger-tint: ${colors.danger};\n\n`; // Podríamos calcular un tint
  
  // Info
  css += `  --ion-color-info: ${colors.info};\n`;
  css += `  --ion-color-info-rgb: ${hexToRgb(colors.info)};\n`;
  css += `  --ion-color-info-contrast: ${colors.white};\n`;
  css += `  --ion-color-info-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `  --ion-color-info-shade: ${colors.info};\n`; // Podríamos calcular un shade
  css += `  --ion-color-info-tint: ${colors.info};\n\n`; // Podríamos calcular un tint
  
  // Colores neutros
  css += `  /* Colores neutros */\n`;
  
  // Light
  css += `  --ion-color-light: ${colors.light};\n`;
  css += `  --ion-color-light-rgb: ${hexToRgb(colors.light)};\n`;
  css += `  --ion-color-light-contrast: ${colors.black};\n`;
  css += `  --ion-color-light-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `  --ion-color-light-shade: ${darkenColor(colors.light, 10)};\n`;
  css += `  --ion-color-light-tint: ${lightenColor(colors.light, 10)};\n\n`;
  
  // Medium
  css += `  --ion-color-medium: ${colors.medium};\n`;
  css += `  --ion-color-medium-rgb: ${hexToRgb(colors.medium)};\n`;
  css += `  --ion-color-medium-contrast: ${colors.black};\n`;
  css += `  --ion-color-medium-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `  --ion-color-medium-shade: ${darkenColor(colors.medium, 10)};\n`;
  css += `  --ion-color-medium-tint: ${lightenColor(colors.medium, 10)};\n\n`;
  
  // Dark
  css += `  --ion-color-dark: ${colors.dark};\n`;
  css += `  --ion-color-dark-rgb: ${hexToRgb(colors.dark)};\n`;
  css += `  --ion-color-dark-contrast: ${colors.white};\n`;
  css += `  --ion-color-dark-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `  --ion-color-dark-shade: ${darkenColor(colors.dark, 10)};\n`;
  css += `  --ion-color-dark-tint: ${lightenColor(colors.dark, 10)};\n\n`;
  
  // Colores específicos para la pizzería
  css += `  /* Colores específicos para la pizzería */\n`;
  css += `  --color-crust: ${colors.crust};\n`;
  css += `  --color-cheese: ${colors.cheese};\n`;
  css += `  --color-tomato: ${colors.tomato};\n`;
  css += `  --color-basil: ${colors.basil};\n`;
  
  css += `}\n\n`;
  
  // Modo oscuro
  css += `/* Modo oscuro */\n`;
  css += `@media (prefers-color-scheme: dark) {\n`;
  css += `  :root {\n`;
  
  // Primary (modo oscuro)
  css += `    --ion-color-primary: ${colors.primaryLight};\n`;
  css += `    --ion-color-primary-rgb: ${hexToRgb(colors.primaryLight)};\n`;
  css += `    --ion-color-primary-contrast: ${colors.white};\n`;
  css += `    --ion-color-primary-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `    --ion-color-primary-shade: ${colors.primary};\n`;
  css += `    --ion-color-primary-tint: ${lightenColor(colors.primaryLight, 10)};\n\n`;
  
  // Secondary (modo oscuro)
  css += `    --ion-color-secondary: ${colors.secondaryLight};\n`;
  css += `    --ion-color-secondary-rgb: ${hexToRgb(colors.secondaryLight)};\n`;
  css += `    --ion-color-secondary-contrast: ${colors.black};\n`;
  css += `    --ion-color-secondary-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `    --ion-color-secondary-shade: ${colors.secondary};\n`;
  css += `    --ion-color-secondary-tint: ${lightenColor(colors.secondaryLight, 10)};\n\n`;
  
  // Tertiary (modo oscuro)
  css += `    --ion-color-tertiary: ${colors.tertiaryLight};\n`;
  css += `    --ion-color-tertiary-rgb: ${hexToRgb(colors.tertiaryLight)};\n`;
  css += `    --ion-color-tertiary-contrast: ${colors.black};\n`;
  css += `    --ion-color-tertiary-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `    --ion-color-tertiary-shade: ${colors.tertiary};\n`;
  css += `    --ion-color-tertiary-tint: ${lightenColor(colors.tertiaryLight, 10)};\n\n`;
  
  // Colores neutros (modo oscuro)
  css += `    --ion-color-light: #222222;\n`;
  css += `    --ion-color-light-rgb: 34, 34, 34;\n`;
  css += `    --ion-color-light-contrast: ${colors.white};\n`;
  css += `    --ion-color-light-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `    --ion-color-light-shade: #1e1e1e;\n`;
  css += `    --ion-color-light-tint: #383838;\n\n`;
  
  css += `    --ion-color-medium: #989aa2;\n`;
  css += `    --ion-color-medium-rgb: 152, 154, 162;\n`;
  css += `    --ion-color-medium-contrast: ${colors.white};\n`;
  css += `    --ion-color-medium-contrast-rgb: ${hexToRgb(colors.white)};\n`;
  css += `    --ion-color-medium-shade: #86888f;\n`;
  css += `    --ion-color-medium-tint: #a2a4ab;\n\n`;
  
  css += `    --ion-color-dark: #f4f5f8;\n`;
  css += `    --ion-color-dark-rgb: 244, 245, 248;\n`;
  css += `    --ion-color-dark-contrast: ${colors.black};\n`;
  css += `    --ion-color-dark-contrast-rgb: ${hexToRgb(colors.black)};\n`;
  css += `    --ion-color-dark-shade: #d7d8da;\n`;
  css += `    --ion-color-dark-tint: #f5f6f9;\n`;
  
  css += `  }\n`;
  css += `}\n`;
  
  css += `/* Fin de variables CSS */\n`;

  return css;
}

// Función para oscurecer un color (simula shade)
function darkenColor(hex: string, percent: number): string {
  return shadeColor(hex, -percent);
}

// Función para aclarar un color (simula tint)
function lightenColor(hex: string, percent: number): string {
  return shadeColor(hex, percent);
}

// Función para ajustar el brillo de un color
function shadeColor(hex: string, percent: number): string {
  hex = hex.replace('#', '');
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  const calculateShade = (value: number): number => {
    return Math.round(Math.min(Math.max(0, value + (value * percent / 100)), 255));
  };
  
  const rr = calculateShade(r).toString(16).padStart(2, '0');
  const gg = calculateShade(g).toString(16).padStart(2, '0');
  const bb = calculateShade(b).toString(16).padStart(2, '0');
  
  return `#${rr}${gg}${bb}`;
}

// Escribir el archivo CSS
const cssContent = generateCssVars();
const outputPath = path.resolve(__dirname, 'variables.css');

fs.writeFileSync(outputPath, cssContent);
console.log(`Variables CSS generadas en ${outputPath}`);