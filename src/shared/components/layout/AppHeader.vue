<template>
  <ion-header>
    <ion-toolbar>
      <!-- Logo -->
      <div class="logo">
        <ion-title>Pedestales Pizzería</ion-title>
      </div>
      
      <!-- Barra de navegación -->
      <MainNavigation />
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import MainNavigation from '../navigation/MainNavigation.vue';
</script>
