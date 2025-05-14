<template>
  <ion-header 
    class="sticky top-0 z-[100] bg-white transition-all duration-300 ease-in-out border-b border-transparent" 
    :class="{ 'shadow-md border-b border-gray-100': !isAtTop }"
  >
    <ion-toolbar class="toolbar-container">
      <!-- Contenedor principal con mejor distribución -->
      <div class="nav-container">
        <!-- Logo y título con tamaño correcto -->
        <div class="logo-container">
          <img 
            src="@/assets/images/logo-sin-fondo.png" 
            alt="Logo de Pedestales Pizzería" 
            class="logo-image"
          />
          <!-- Título añadido junto al logo -->
          <h1 class="brand-title">Pedestales Pizzería</h1>
        </div>

        <!-- Navegación para escritorio -->
        <div class="desktop-nav" v-if="!isMobile">
          <div class="nav-links">
            <a 
              v-for="(item, index) in navItems" 
              :key="index"
              @click="navigateTo(item.id)"
              class="nav-link"
              :class="{ 'active-nav-link': activeSection === item.id }"
              :aria-label="`Ir a sección ${item.label}`"
            >
              {{ item.label }}
            </a>
          </div>
        </div>

        <!-- Botón de menú móvil -->
        <div class="mobile-nav-button" v-if="isMobile">
          <ion-button 
            @click="toggleMobileMenu"
            class="menu-toggle-button"
            :aria-expanded="isMenuOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
            aria-label="Menú principal"
          >
            <Icon 
              :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" 
              width="28" 
              height="28" 
              class="menu-icon"
            />
          </ion-button>
        </div>
      </div>
    </ion-toolbar>

    <!-- Menú móvil desplegable -->
    <div 
      id="mobile-menu"
      v-if="isMobile" 
      class="mobile-menu"
      :class="{ 'menu-closed': !isMenuOpen, 'menu-open': isMenuOpen }"
      :aria-hidden="isMenuOpen ? 'false' : 'true'"
    >
      <div class="mobile-menu-content">
        <a 
          v-for="(item, index) in navItems" 
          :key="index"
          class="mobile-menu-link"
          :class="{ 'active-mobile-link': activeSection === item.id }"
          @click="navigateTo(item.id)"
        >
          <Icon :icon="item.icon" class="mobile-menu-icon" />
          <span>{{ item.label }}</span>
        </a>
      </div>
    </div>
  </ion-header>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { IonHeader, IonToolbar, IonButton } from '@ionic/vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import { useBreakpoints } from '@/shared/composables/useBreakpoints';

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);
const isHomePage = ref(false);
const currentPath = ref('');
const isAtTop = ref(true);
const activeSection = ref('hero');

// Usar el composable de breakpoints para detectar el tamaño de pantalla
const { isMobile } = useBreakpoints();

// Elementos de navegación con iconos
const navItems = [
  { id: 'hero', label: 'INICIO', icon: 'mdi:home' },
  { id: 'menu-preview', label: 'MENÚ', icon: 'uil:food' },
  { id: 'promociones-preview', label: 'PROMOCIONES', icon: 'mdi:tag-multiple' },
  { id: 'contacto', label: 'CONTACTO', icon: 'mdi:phone' }
];

// Función para verificar si es la página de inicio
const checkHomePage = () => {
  isHomePage.value = currentPath.value === '/home' || currentPath.value === '/';
};

// Detectar scroll para efectos visuales
const handleScroll = () => {
  isAtTop.value = window.scrollY < 10;
};

// Detectar sección activa al hacer scroll
const detectActiveSection = () => {
  if (!isHomePage.value) return;
  
  const sections = navItems.map(item => ({
    id: item.id,
    element: document.getElementById(item.id)
  })).filter(section => section.element);
  
  // Encontrar la sección más cercana al viewport
  let currentSection = sections[0]?.id;
  let minDistance = Infinity;
  
  sections.forEach(section => {
    if (!section.element) return;
    const rect = section.element.getBoundingClientRect();
    const distance = Math.abs(rect.top);
    
    if (distance < minDistance) {
      minDistance = distance;
      currentSection = section.id;
    }
  });
  
  if (currentSection) {
    activeSection.value = currentSection;
  }
};

// Alternar menú móvil
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Función para navegar a una sección
const navigateTo = (sectionId: string) => {
  if (isHomePage.value) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection.value = sectionId;
    }
  } else {
    router.push({ path: '/', hash: sectionId });
  }
  isMenuOpen.value = false; // Cerrar menú después de navegar
};

// Configuración de eventos
onMounted(() => {
  currentPath.value = route.path;
  checkHomePage();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', detectActiveSection);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', detectActiveSection);
});

watch(() => route.path, () => {
  currentPath.value = route.path;
  checkHomePage();
});
</script>

<style scoped>

.toolbar-container {
  --padding-start: 0;
  --padding-end: 0;
  --min-height: auto;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Estilos para el logo y título */
.logo-container {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 3.5rem;
  width: auto;
  transition: all 0.3s ease;
}

.brand-title {
  margin-left: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  display: block;
  transition: all 0.3s ease;
}

/* Navegación desktop */
.desktop-nav {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.nav-link:hover {
  color: var(--ion-color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--ion-color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.active-nav-link {
  color: var(--ion-color-primary);
}

.active-nav-link::after {
  width: 100%;
}

/* Botón de menú móvil */
.mobile-nav-button {
  display: flex;
  align-items: center;
}

.menu-toggle-button {
  --padding-start: 0.5rem;
  --padding-end: 0.5rem;
  --background: transparent;
  --background-hover: rgba(229, 57, 53, 0.1);
  --ripple-color: rgba(229, 57, 53, 0.2);
  --border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
}

.menu-icon {
  color: var(--ion-color-primary);
}

/* Menú móvil */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease;
}

.menu-closed {
  max-height: 0;
  opacity: 0;
}

.menu-open {
  max-height: 300px;
  opacity: 1;
}

.mobile-menu-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-menu-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #333;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.mobile-menu-link:hover {
  background-color: rgba(229, 57, 53, 0.1);
  color: var(--ion-color-primary);
}

.active-mobile-link {
  background-color: rgba(229, 57, 53, 0.1);
  color: var(--ion-color-primary);
}

.mobile-menu-icon {
  color: var(--ion-color-primary);
}

/* Responsive: ajustes para diferentes tamaños */
@media (max-width: 768px) {
  .brand-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .logo-image {
    height: 3rem;
  }
  
  .brand-title {
    font-size: 1rem;
  }
  
  .nav-container {
    padding: 0.5rem;
  }
}

</style>