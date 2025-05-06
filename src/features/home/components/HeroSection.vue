<template>
  <section id="hero" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-6">Bienvenido a Pedestales Pizzería</h1>
      <p class="text-xl mb-8">Las mejores pizzas artesanales de la ciudad</p>
      <caruselSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import caruselSection from './CaruselSection.vue';
</script>
