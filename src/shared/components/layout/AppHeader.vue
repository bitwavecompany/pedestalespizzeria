<template>
  <ion-header>
    <ion-toolbar>
      <!-- Logo y título en la misma línea -->
      <div class="flex flex-row items-center">
        <img src="@/assets/images/logo-sin-fondo.png" alt="Logo" class="logo-image" />
        <h1 class="text-lg font-bold ml-2">Pedestales Pizzería</h1>
      </div>

      <!-- Navegación para escritorio - solo visible en md+ -->
      <ion-buttons slot="end" v-if="!isMobile">
        <ion-button @click="scrollToSection('hero')">Inicio</ion-button>
        <ion-button @click="scrollToSection('menu-preview')">Menú</ion-button>
        <ion-button @click="scrollToSection('promociones-preview')">Promociones</ion-button>
        <ion-button @click="scrollToSection('contacto')">Contacto</ion-button>
      </ion-buttons>

      <!-- Botón de menú móvil - solo visible en móvil -->
      <ion-buttons slot="end" v-if="isMobile">
        <ion-button @click="toggleMobileMenu">
          <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" width="24" height="24" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>

    <!-- Menú móvil desplegable - solo visible cuando el menú está abierto Y estamos en móvil -->
    <div 
      v-if="isMenuOpen && isMobile" 
      class="absolute top-[56px] left-0 w-full bg-white z-50 shadow-md"
    >
      <div class="flex flex-col p-2">
        <ion-button 
          expand="block" 
          fill="clear" 
          class="w-full text-left py-3"
          @click="navigateTo('hero')"
        >
          Inicio
        </ion-button>
        <ion-button 
          expand="block" 
          fill="clear" 
          class="w-full text-left py-3"
          @click="navigateTo('menu-preview')"
        >
          Menú
        </ion-button>
        <ion-button 
          expand="block" 
          fill="clear" 
          class="w-full text-left py-3"
          @click="navigateTo('promociones-preview')"
        >
          Promociones
        </ion-button>
        <ion-button 
          expand="block" 
          fill="clear" 
          class="w-full text-left py-3"
          @click="navigateTo('contacto')"
        >
          Contacto
        </ion-button>
      </div>
    </div>
  </ion-header>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { IonHeader, IonToolbar, IonButtons, IonButton } from '@ionic/vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import { useBreakpoints } from '@/shared/composables/useBreakpoints';

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);
const isHomePage = ref(false);
const currentPath = ref('');

// Usar el composable de breakpoints para detectar el tamaño de pantalla
const { isMobile } = useBreakpoints();

// Determine if it's the homepage on mount
onMounted(() => {
  currentPath.value = route.path;
  checkHomePage();
});

// Watch for route changes to update isHomePage
watch(() => route.path, () => {
  currentPath.value = route.path;
  checkHomePage();
});

const checkHomePage = () => {
  isHomePage.value = currentPath.value === '/home' || currentPath.value === '/';
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
    }
  } else {
    router.push({ path: '/', hash: sectionId });
  }
  isMenuOpen.value = false; // Cerrar menú después de navegar
};

// Función para scroll a sección (versión desktop)
const scrollToSection = (sectionId: string) => {
  navigateTo(sectionId);
};
</script>

<style scoped>
/* Asegurar que el menú móvil tenga la altura correcta */
:deep(.ion-button) {
  width: 100%;
}

:deep(.button-native) {
  justify-content: flex-start;
}

/* Estilos para el logo y título en la misma línea */
.flex.flex-row {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
}

/* Estilos para el logo */
.logo-image {
  height: 2.5rem;
  width: auto;
  display: inline-block;
}

/* Responsive: ajustes para móviles */
@media (max-width: 576px) {
  .logo-image {
    height: 2rem;
  }
}
</style>