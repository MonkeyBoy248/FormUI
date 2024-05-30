<script setup lang="ts">
import AdressForm from '@/components/pages/adress/AdressForm.vue'
import NavigationBlock from '@/components/shared/NavigationBlock.vue'
</script>

<template>
  <main class="adressPage">
    <div class="adressFormWrapper">
      <AdressForm />
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
