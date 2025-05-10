 project="Pedestales Pizzería" type="vue"<template>
  <ion-header>
    <ion-toolbar>
      <!-- Logo -->
      <div class="logo-container">
        
        <img src="@/assets/images/logo-sin-fondo.png" alt="Logo" class="logo-image" />
        
        <ion-title>Pedestales Pizzería</ion-title>

        <!-- Barra de navegación -->
        <MainNavigation />
      </div>
      
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import MainNavigation from '../navigation/MainNavigation.vue';
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.logo-image {
  height: 2.5rem; /* Ajusta este valor según necesites */
  width: auto;
  margin-right: 0.5rem;
}

/* Responsive: logo más pequeño en móviles */
@media (max-width: 576px) {
  .logo-image {
    height: 2rem;
  }
}
</style>