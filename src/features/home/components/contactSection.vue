<template>
<section id="contacts" class="bg-gray-900 text-white py-12 px-4">
  <div class="max-w-screen-xl mx-auto">
    <!-- Título principal arriba -->
    <h2 class="text-3xl font-extrabold text-red-400 mb-8 text-left">{{ companyInfo.name }}</h2>
    <!-- Grid de columnas debajo -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Info Restaurante -->
      <div>
        <span class="text-xl font-semibold text-white">Nuestra Ubicación</span><br>
        <div class="flex items-start gap-2 mt-2">
          <Icon icon="mdi:map-marker" class="w-5 h-5 text-red-400 mt-1" />
          <a :href="companyInfo.locationUrl" target="_blank" rel="noopener" class="text-gray-400 hover:underline">{{ companyInfo.address }}</a>
        </div>
      </div>
      <!-- Contacto -->
      <div>
        <h3 class="text-xl font-semibold mb-3">Contacto</h3>
        <div class="flex items-center gap-2 mb-1">
          <Icon icon="mdi:phone" class="w-5 h-5 text-orange-400" />
          <span class="text-gray-400">Pedidos</span>
          <span class="text-orange-400 ml-1">{{ companyInfo.phone }}</span>
        </div>
        <div class="flex items-center gap-2 mb-1">
          <Icon icon="ic:baseline-email" class="w-5 h-5 text-blue-400" />
          <span class="text-gray-400">Email</span>
          <span class="text-blue-400 ml-1">{{ companyInfo.email }}</span>
        </div>
      </div>
      <!-- Horarios -->
      <div>
        <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
          <Icon icon="mdi:clock-outline" class="w-5 h-5 text-yellow-400" />
          Horarios
        </h3>
        <div class="flex flex-col gap-1">
          <div class="flex justify-between">
            <span class="text-gray-400">Lunes - Viernes</span>
            <span class="text-yellow-400 font-medium">{{ companyInfo.schedule['lunes-viernes'] }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Sábado</span>
            <span class="text-yellow-400 font-medium">{{ companyInfo.schedule.sabado }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Domingo</span>
            <span class="text-yellow-400 font-medium">{{ companyInfo.schedule.domingo }}</span>
          </div>
        </div>
      </div>
      <!-- Síguenos -->
      <div>
        <h3 class="text-xl font-semibold mb-3 text-left">Síguenos</h3>
        <div class="flex gap-3 mb-4 justify-center">
          <a :href="companyInfo.social.facebook" class="bg-gray-800 hover:bg-gray-700 rounded-full p-2"><Icon icon="mdi:facebook" class="w-5 h-5 text-white" /></a>
          <a :href="companyInfo.social.instagram" class="bg-gray-800 hover:bg-gray-700 rounded-full p-2"><Icon icon="mdi:instagram" class="w-5 h-5 text-white" /></a>
          <a :href="companyInfo.social.twitter" class="bg-gray-800 hover:bg-gray-700 rounded-full p-2"><Icon icon="mdi:twitter" class="w-5 h-5 text-white" /></a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';
import { fetchCompanyInfo } from '@/features/home/services/api';

const companyInfo = ref({
  name: '',
  address: '',
  locationUrl: '',
  phone: '',
  email: '',
  schedule: { 'lunes-viernes': '', sabado: '', domingo: '' },
  social: { facebook: '#', instagram: '#', twitter: '#' }
});

onMounted(async () => {
  try {
    const data = await fetchCompanyInfo();
    if (Array.isArray(data) && data.length > 0) {
      companyInfo.value = data[0];
    }
  } catch (e) {
    // Manejo simple de error
  }
});
</script>

<style scoped>
</style>