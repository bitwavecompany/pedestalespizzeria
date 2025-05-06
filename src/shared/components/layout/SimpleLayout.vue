<template>
  <ion-page>
      <!-- Cabecera simple -->
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Regresar</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <!-- Contenido principal -->
      <ion-content id="main-content">
        <main class="main-content">
          <slot></slot>
        </main>
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/vue';
</script>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100%;
}
</style>