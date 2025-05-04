// src/theme/theme.ts

// Colores principales de la aplicación
export const colors = {
    // Colores principales de la marca
    primary: '#E53935',       // Rojo para pizzería
    secondary: '#FFA000',     // Ámbar/naranja para acentos
    tertiary: '#43A047',      // Verde para elementos italianos
    
    // Variaciones de colores primarios (para sombras y tonos)
    primaryLight: '#EF5350',
    primaryDark: '#C62828',
    secondaryLight: '#FFB74D',
    secondaryDark: '#FF8F00',
    tertiaryLight: '#66BB6A',
    tertiaryDark: '#2E7D32',
    
    // Colores de estado
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#F44336',
    info: '#2196F3',
    
    // Colores neutros
    white: '#FFFFFF',
    light: '#F5F5F5',
    medium: '#BDBDBD',
    dark: '#424242',
    black: '#212121',
    
    // Colores específicos para la pizzería
    crust: '#D2691E',        // Color marrón para la corteza
    cheese: '#FFF59D',       // Color amarillo claro para el queso
    tomato: '#E53935',       // Color rojo para la salsa
    basil: '#43A047'         // Color verde para albahaca/hierbas
  };
  
  // Espaciado
  export const spacing = {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem'       // 48px
  };
  
  // Tipografía
  export const typography = {
    fontFamily: {
      sans: '"Roboto", "Helvetica Neue", sans-serif',
      serif: '"Playfair Display", serif',
      mono: '"Roboto Mono", monospace'
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem' // 30px
    }
  };
  
  // Bordes
  export const borders = {
    radius: {
      sm: '0.125rem',   // 2px
      md: '0.25rem',    // 4px
      lg: '0.5rem',     // 8px
      xl: '1rem',       // 16px
      full: '9999px'    // Círculo
    }
  };
  
  // Sombras
  export const shadows = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  };
  
  // Exportamos todo como un objeto theme para facilitar importaciones
  export default {
    colors,
    spacing,
    typography,
    borders,
    shadows
  };