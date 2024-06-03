<script setup lang="ts">
import NavigationBlock from '@/components/shared/NavigationBlock.vue'
import Toast from 'primevue/toast'
</script>

<template>
  <Toast />
  <main class="formPage">
    <div class="formWrapper">
      <RouterView />
    </div>
    <NavigationBlock />
  </main>
</template>

<style scoped>
.formPage {
  width: 100%;
  margin: auto;
  max-width: 1400px;
  min-width: 900px;
  padding: 32px 24px;
}

.formWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
