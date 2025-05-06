<template>
  <SimpleLayout>
    <div class="menu-page p-4">
      <h1 class="text-2xl font-bold mb-6">Nuestro Menú</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Ejemplo de item de menú -->
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
        
        <!-- Aquí irían más items del menú -->
      </div>
    </div>
  </SimpleLayout>
</template>

<script setup lang="ts">
import SimpleLayout from '@/shared/components/layout/SimpleLayout.vue';
</script>
