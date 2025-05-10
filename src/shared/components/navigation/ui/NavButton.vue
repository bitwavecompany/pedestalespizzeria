// src/shared/components/ui/NavButton.vue

<script setup lang="ts">
defineProps<{
  active?: boolean;
  icon?: string;
}>();

defineEmits(['click']);
</script>

<template>
  <button 
    class="nav-button" 
    :class="{ 'active': active }"
    @click="$emit('click')"
  >
    <Icon v-if="icon" :icon="icon" class="mr-1" size="16" />
    <slot></slot>
  </button>
</template>

<style scoped>
.nav-button {
  color: black;
  text-decoration: none;
  font-size: 25px;
  border: none;
  background: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  position: relative;
  padding: 5px 10px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button::before {
  content: '';
  width: 0%;
  height: 2px;
  background: #f44336;
  display: block;
  transition: 0.5s;
  position: absolute;
  top: 0;
  left: 0;
}

.nav-button::after {
  content: '';
  width: 0%;
  height: 2px;
  background: #f44336;
  display: block;
  transition: 0.5s;
  position: absolute;
  bottom: 0;
  left: 0;
}

.nav-button:hover::after, .nav-button:hover::before {
  width: 100%;
}

.nav-button.active::after, .nav-button.active::before {
  width: 100%;
}

/* Aseguramos que el color siempre sea negro, incluso al hacer hover */
.nav-button:hover, .nav-button.active {
  color: black;
}
</style>