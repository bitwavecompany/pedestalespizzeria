<template>
  <MainLayout>
    <caruselSection />
    <menuSection />
    <promotionsSection />
    <contactSection />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layout/MainLayout.vue'
import caruselSection from '../components/caruselSection.vue';
import contactSection from '../components/contactSection.vue';
import menuSection from '../components/menuSection.vue';
import promotionsSection from '../components/promotionsSection.vue';

</script>

<style scoped>

</style>