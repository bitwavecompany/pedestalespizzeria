<template>
  <div class="flex items-center">
    <!-- Botón de menú móvil -->
    <ion-buttons>
      <ion-button @click="toggleMenu" class="menu-toggle p-2">
        <Icon :icon="menuIcon" size="28" class="text-primary" />
      </ion-button>
    </ion-buttons>
    
    <!-- Overlay de fondo -->
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
      @click="toggleMenu"
    ></div>
    
    <!-- Menú desplegable -->
    <div 
      v-if="isMenuOpen" 
      class="mobile-menu fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-white dark:bg-gray-900 z-50 flex flex-col shadow-xl"
    >
      <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center">
          <img src="@/assets/images/logo-sin-fondo.png" alt="Logo" class="h-8 w-auto mr-2" />
          <div class="text-xl font-bold text-primary">Pedestales Pizzería</div>
        </div>
        <ion-button @click="toggleMenu" fill="clear" class="text-dark">
          <Icon icon="mdi:close" size="24" />
        </ion-button>
      </div>
      
      <div class="flex flex-col p-4 overflow-y-auto">
        <ion-button 
          v-for="(item, index) in navItems" 
          :key="index"
          @click="navigateTo(item.id)"
          expand="block"
          fill="clear"
          class="mobile-nav-item my-2 text-left"
          :class="{ 'active-mobile': activeSection === item.id }"
        >
          <div class="flex items-center w-full">
            <Icon :icon="item.icon" class="text-primary mr-3 text-xl" />
            <span>{{ item.label }}</span>
          </div>
        </ion-button>
        
        <div class="mt-auto pt-6">
          <ion-button 
            expand="block"
            class="mt-6 bg-secondary text-white font-bold rounded-full"
            @click="orderNow"
          >
            <Icon icon="mdi:shopping-outline" slot="start" />
            Ordenar Ahora
          </ion-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonButtons, IonButton } from '@ionic/vue';
import { ref, computed, defineProps, defineEmits, watch, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useBreakpoints } from '@/shared/composables/useBreakpoints';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const props = defineProps<{
  navItems: NavItem[],
  activeSection: string
}>();

const emit = defineEmits(['navigate', 'order']);

const navItems = computed(() => props.navItems);
const isMenuOpen = ref(false);
const menuIcon = 'mdi:menu';
const { isDesktop } = useBreakpoints();
const originalOverflow = ref('');

// Alternar menú móvil con animación
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    originalOverflow.value = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  } else {
    document.body.style.overflow = originalOverflow.value; // Restaurar scroll
  }
};

// Función para navegar a una sección
const navigateTo = (sectionId: string) => {
  emit('navigate', sectionId);
  toggleMenu(); // Cerrar menú después de navegar
};

// Función para ordenar
const orderNow = () => {
  emit('order');
  toggleMenu(); // Cerrar menú después de navegar
};

// Cerrar el menú cuando se cambia a modo desktop
watch(
  () => isDesktop.value,
  (isNowDesktop) => {
    if (isNowDesktop && isMenuOpen.value) {
      isMenuOpen.value = false;
      document.body.style.overflow = originalOverflow.value;
    }
  }
);

// Agregar listener para el evento resize
const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = originalOverflow.value;
  }
};

// Configurar y limpiar el evento resize
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  // Asegurarse de restaurar el overflow si el componente se desmonta
  document.body.style.overflow = originalOverflow.value;
});
</script>

<style scoped>
.mobile-menu {
  animation: slideIn 0.3s ease-out;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
}

.mobile-nav-item {
  font-size: 1.1rem;
  height: 56px;
  --background-hover: rgba(229, 57, 53, 0.08);
  --color: var(--ion-color-dark);
  --color-activated: var(--ion-color-primary);
  --color-hover: var(--ion-color-primary);
  border-radius: 12px;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.mobile-nav-item.active-mobile {
  --background: rgba(229, 57, 53, 0.08);
  --color: var(--ion-color-primary);
  font-weight: bold;
}

.menu-toggle {
  border-radius: 50%;
  transition: all 0.2s ease;
}

.menu-toggle:active {
  background-color: rgba(229, 57, 53, 0.1);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.text-primary {
  color: var(--ion-color-primary);
}

.bg-secondary {
  background-color: var(--ion-color-secondary);
}
</style>
