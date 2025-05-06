<template>
  <MainLayout>
    <div class="home-page">
      <HeroSection />
      <MenuPreviewSection />
      <PromocionesPreviewSection />
      <ContactoSection />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/shared/components/layout/MainLayout.vue';
import HeroSection from '../components/HeroSection.vue';
import MenuPreviewSection from '../components/MenuPreviewSection.vue';
import PromocionesPreviewSection from '../components/PromtionsPreviewSection.vue';
import ContactoSection from '../components/ContactSection.vue';
</script>
