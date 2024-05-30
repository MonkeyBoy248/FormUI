<script setup lang="ts">
import AmbulanceForm from '@/components/pages/main/AmbulanceForm.vue'
import FormNavigation from '@/components/pages/main/FormNavigation.vue'
</script>

<template>
  <main class="mainPage">
    <div class="ambulanceFormWrapper">
      <AmbulanceForm />
    </div>
    <FormNavigation />
  </main>
</template>

<style scoped>
.mainPage {
  width: 100%;
  margin: auto;
  max-width: 1400px;
  padding: 32px 24px;
}

.ambulanceFormWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
