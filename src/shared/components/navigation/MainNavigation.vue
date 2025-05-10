<template>
  <div class="hidden md:flex">
    <ion-buttons slot="end">
      <ion-button @click="scrollToSection('hero')">Inicio</ion-button>
      <ion-button @click="scrollToSection('menu-preview')">Menú</ion-button>
      <ion-button @click="scrollToSection('promociones-preview')">Promociones</ion-button>
      <ion-button @click="scrollToSection('contacto')">Contacto</ion-button>
    </ion-buttons>
  </div>
  <MobileMenu />
</template>

<script setup lang="ts">
import { IonButtons, IonButton } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const isHomePage = computed(() => route.path === '/home' || route.path === '/');

const scrollToSection = (sectionId: string) => {
  if (isHomePage.value) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    router.push({ path: '/', hash: sectionId });
  }
};
</script>