<template>
<section id="hero">
<div id="default-carousel" class="relative w-screen bg-gray-200" :style="`height: calc(100vh - 64px);`">
  <!-- Carousel wrapper -->
  <div class="relative w-screen h-full overflow-hidden rounded-none">
    <div v-for="(img, idx) in images" :key="img.id"
      :class=" [
        idx === active ? 'block duration-700 ease-in-out opacity-100' : 'hidden opacity-0',
        'absolute block w-full h-full transition-opacity top-0 left-0'
      ]"
      data-carousel-item
    >
      <img :src="img.imagen" class="h-full mx-auto object-contain" style="max-width:100%;" alt="slide image" />
    </div>
  </div>
  <!-- Slider indicators -->
  <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    <button v-for="(_, idx) in images" :key="'ind-'+idx" @click="active = idx" type="button"
      class="w-3 h-3 rounded-full"
      :class="active === idx ? 'bg-blue-600' : 'bg-gray-300'"
      :aria-current="active === idx ? 'true' : 'false'"
      :aria-label="`Slide ${idx+1}`"
    ></button>
  </div>
  <!-- Slider controls -->
  <button @click="prev" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <Icon icon="mdi:chevron-left" class="w-6 h-6 text-black dark:text-gray-800" />
      <span class="sr-only">Previous</span>
    </span>
  </button>
  <button @click="next" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <Icon icon="mdi:chevron-right" class="w-6 h-6 text-black dark:text-gray-800" />
      <span class="sr-only">Next</span>
    </span>
  </button>
</div>
</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCaruselImages } from '../services/api'

interface CaruselImage {
  id: number;
  imagen: string;
}

const images = ref<CaruselImage[]>([])
const active = ref(0)

const prev = () => { active.value = (active.value - 1 + images.value.length) % images.value.length }
const next = () => { active.value = (active.value + 1) % images.value.length }

onMounted(async () => {
  try {
    images.value = await fetchCaruselImages()
  } catch (e) {
    images.value = []
  }
})
</script>

<style scoped>
</style>