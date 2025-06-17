<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900 font-sans">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="companyInfo.logo" class="h-8" alt="Logo Pedestales Pizzería" v-if="companyInfo.logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ companyInfo.name }}</span>
    </div>
    <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" :aria-expanded="isOpen">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div :class="[isOpen ? 'block' : 'hidden', 'w-full md:block md:w-auto']" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#hero" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</a>
        </li>
        <li>
          <a href="#menu" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menú</a>
        </li>
        <li>
          <a href="#promotions" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Promociones</a>
        </li>
        <li>
          <a href="#contacts" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contactos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCompanyInfo } from '@/features/home/services/api'

const isOpen = ref(false)
const companyInfo = ref({ name: '', logo: '' })

onMounted(async () => {
  try {
    const data = await fetchCompanyInfo()
    // companyInfo.json es un array, tomamos el primer elemento
    if (Array.isArray(data) && data.length > 0) {
      companyInfo.value = {
        name: data[0].name,
        logo: data[0].logo
      }
    }
  } catch (e) {
    // Manejo simple de error
    companyInfo.value = { name: 'Pizzería Pedestales', logo: '' }
  }
})
</script>

<style scoped>
/* Eliminado: nav { font-family: sans-serif; } */
</style>
