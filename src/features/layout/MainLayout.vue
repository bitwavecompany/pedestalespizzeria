<template>
  <div>
    <Navbar />
    <main >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shares/components/navBar/Navbar.vue'
</script>

<style scoped>
main {
  min-height: 80vh;
}
</style>
