<template>
  <SimpleLayout>
    <div class="promociones-page p-4">
      <h1 class="text-2xl font-bold mb-6">Promociones Especiales</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Promoción 1 -->
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-xl font-bold mb-2">2x1 en Pizzas Medianas</h2>
          <p class="mb-4">Todos los martes, lleva 2 pizzas medianas por el precio de 1</p>
          <div class="text-sm inline-block px-3 py-1 rounded-full">
            Válido hasta: 30/06/2025
          </div>
        </div>
        
        <!-- Promoción 2 -->
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-xl font-bold mb-2">Pizza Familiar + 2 Bebidas</h2>
          <p class="mb-4">Por solo $15.99, lleva una pizza familiar y 2 bebidas de tu elección</p>
          <div class="text-sm inline-block px-3 py-1 rounded-full">
            Válido todos los días
          </div>
        </div>
      </div>
    </div>
  </SimpleLayout>
</template>

<script setup lang="ts">
import SimpleLayout from '@/shared/components/layout/SimpleLayout.vue';
</script>
