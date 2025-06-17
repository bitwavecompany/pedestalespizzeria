<template>
<section id="menu">
  <h2 class="text-3xl font-extrabold text-left text-yellow-600 drop-shadow-md tracking-wide mb-2 mt-6 flex items-left justify-left gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h2.586A2 2 0 0010 3.586l1-1 1 1A2 2 0 0017.414 5H20a2 2 0 012 2v7c0 2.21-3.582 4-8 4z" /></svg>
    Lo más popular
  </h2>
  <p class="text-lg text-gray-600 mb-6 ml-12">Las mejores pizzas de la ciudad, preparadas con ingredientes frescos y recetas tradicionales. ¡Descubre tu favorita!</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 justify-items-center">
    <div v-for="product in products" :key="product.id" class="w-full max-w-[500px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg w-full h-32 object-cover" :src="product.imagen" :alt="product.label" />
      <div class="p-4">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ product.label }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description }}</p>
        <span class="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded">${{ product.price }}</span>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-6">
    <buttonMore class="items-center justify-center text-center"/>
  </div>
</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import buttonMore from '../ui/button-more.vue';
import { fetchProducts } from '../services/api';

interface Product {
  id: number;
  imagen: string;
  label: string;
  description: string;
  price: number;
}

const products = ref<Product[]>([])

onMounted(async () => {
  try {
    products.value = await fetchProducts()
  } catch (e) {
    products.value = []
  }
})
</script>

<style scoped>
/* Puedes personalizar el diseño aquí */
</style>