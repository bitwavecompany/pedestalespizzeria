<template>
<footer class="bg-gray-900 text-white border-t border-gray-800">
  <div class="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between">
    <span class="block text-sm text-gray-400 mb-2 md:mb-0">© {{ year }} {{ companyName }}. Todos los derechos reservados.</span>
    <span class="text-sm text-gray-400 flex items-center gap-1">
      Hecho con
      <svg class="w-4 h-4 text-red-500 mx-1" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
      para amantes de la <span class="text-green-400 ml-1">pizza</span>
    </span>
  </div>
</footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchCompanyInfo } from '@/features/home/services/api';

const year = new Date().getFullYear();
const companyName = ref('');

onMounted(async () => {
  try {
    const data = await fetchCompanyInfo();
    if (Array.isArray(data) && data.length > 0) {
      companyName.value = data[0].name;
    }
  } catch (e) {
    companyName.value = 'Pedestales Pizzería';
  }
});
</script>

<style scoped>
</style>