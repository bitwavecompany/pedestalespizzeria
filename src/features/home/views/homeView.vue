<template>
  <MainLayout>
    <caruselSection />
    <menuSection />
    <promotionsSection />
    <contactSection />
    <footerSection />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layout/MainLayout.vue'
import caruselSection from '../components/caruselSection.vue';
import menuSection from '../components/menuSection.vue';
import contactSection from '../components/contactSection.vue';
import promotionsSection from '../components/promotionsSection.vue';
import footerSection from '../components/footerSection.vue';

</script>

<style scoped>
:global(html), :global(body), :global(#app) {
  width: 100%;
  overflow-x: hidden;
}
</style>