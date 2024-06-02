<script setup lang="ts">
import NavigationBlock from '@/components/shared/NavigationBlock.vue'
import Toast from 'primevue/toast';
</script>

<template>
  <Toast />
  <main class="adressPage">
    <div class="adressFormWrapper">
      <RouterView />
    </div>
    <NavigationBlock />
  </main>
</template>

<style scoped>
.adressPage {
  width: 100%;
  margin: auto;
  max-width: 1400px;
  padding: 32px 24px;
}

.adressFormWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
