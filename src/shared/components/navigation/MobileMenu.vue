<template>
  <div>
    <!-- Botón de menú -->
    <button @click="toggleMenu">
      Menu
    </button>
    
    <!-- Overlay de fondo -->
    <div 
      v-if="isMenuOpen" 
      @click="toggleMenu"
    ></div>
    
    <!-- Menú desplegable -->
    <div v-if="isMenuOpen">
      <div>
        <div>
          <img src="@/assets/images/logo-sin-fondo.png" alt="Logo" />
          <div>Pedestales Pizzería</div>
        </div>
        <button @click="toggleMenu">
          Cerrar
        </button>
      </div>
      
      <div>
        <button 
          v-for="(item, index) in navItems" 
          :key="index"
          @click="navigateTo(item.id)"
        >
          <div>
            {{ item.label }}
          </div>
        </button>
        
        <div>
          <button @click="orderNow">
            Ordenar Ahora
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';

interface NavItem {
  id: string;
  label: string;
}

const props = defineProps<{
  navItems: NavItem[],
  activeSection: string
}>();

const emit = defineEmits(['navigate', 'order']);

const navItems = computed(() => props.navItems);
const isMenuOpen = ref(false);

// Alternar menú móvil
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Función para navegar a una sección
const navigateTo = (sectionId: string) => {
  emit('navigate', sectionId);
  toggleMenu(); // Cerrar menú después de navegar
};

// Función para ordenar
const orderNow = () => {
  emit('order');
  toggleMenu(); // Cerrar menú después de ordenar
};
</script>
