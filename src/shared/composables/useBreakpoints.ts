import { ref, onMounted, onUnmounted } from "vue"

// Definición de los breakpoints según Tailwind CSS
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function useBreakpoints() {
  const windowWidth = ref(0)
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  // Actualizar el ancho de la ventana y calcular los breakpoints
  const updateWidth = () => {
    windowWidth.value = window.innerWidth
    isMobile.value = windowWidth.value < breakpoints.md
    isTablet.value = windowWidth.value >= breakpoints.md && windowWidth.value < breakpoints.lg
    isDesktop.value = windowWidth.value >= breakpoints.md
  }

  // Hook de ciclo de vida para añadir/quitar event listeners
  onMounted(() => {
    updateWidth()
    window.addEventListener("resize", updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth)
  })

  // Función para comprobar si estamos por encima de un breakpoint específico
  const isAbove = (breakpoint: keyof typeof breakpoints) => {
    return windowWidth.value >= breakpoints[breakpoint]
  }

  // Función para comprobar si estamos por debajo de un breakpoint específico
  const isBelow = (breakpoint: keyof typeof breakpoints) => {
    return windowWidth.value < breakpoints[breakpoint]
  }

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    isAbove,
    isBelow,
    breakpoints,
  }
}
