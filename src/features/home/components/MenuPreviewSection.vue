<template>
  <section id="menu-preview" class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">Nuestro Menú</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Item de menú 1 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="font-bold text-lg">Pizza Margherita</h3>
            <p class="mt-1">Salsa de tomate, mozzarella y albahaca</p>
            <div class="flex justify-between items-center mt-4">
              <span class="font-bold">$8.99</span>
            </div>
          </div>
        </div>
        
        <!-- Item de menú 2 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="font-bold text-lg">Pizza Pepperoni</h3>
            <p class="mt-1">Salsa de tomate, mozzarella y pepperoni</p>
            <div class="flex justify-between items-center mt-4">
              <span class="font-bold">$9.99</span>
            </div>
          </div>
        </div>
        
        <!-- Item de menú 3 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="font-bold text-lg">Pizza Vegetariana</h3>
            <p class="mt-1">Salsa de tomate, mozzarella y vegetales frescos</p>
            <div class="flex justify-between items-center mt-4">
              <span class="font-bold">$10.99</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-10">
        <ion-button router-link="/menu">Ver Menú Completo</ion-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
</script>
