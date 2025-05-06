<template>
  <section id="promociones-preview" class="py-16 px-4 bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">Promociones Especiales</h2>
      
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
      
      <div class="text-center mt-10">
        <ion-button router-link="/promociones">Ver Todas las Promociones</ion-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
</script>
