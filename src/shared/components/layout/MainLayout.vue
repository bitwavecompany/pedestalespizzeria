<template>
  <ion-page>
    <AppHeader />
    <ion-content id="main-content" class="ion-padding">
      <main class="main-content">
        <slot></slot>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import AppHeader from './NavegationMain.vue';
</script>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100%;
}
</style>
