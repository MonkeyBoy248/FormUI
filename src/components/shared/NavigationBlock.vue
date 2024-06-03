<script setup lang="ts">
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router'

const formStore = useFormStore()
const { isLastStepId } = storeToRefs(formStore)
</script>
<template>
  <div class="navigationWrapper">
    <RouterLink class="navigationLink" to="/">На главную</RouterLink>
    <RouterLink v-if="!isLastStepId" class="navigationLink" to="/">Далее</RouterLink>
  </div>
</template>
<style scoped>
.navigationWrapper {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

.navigationLink {
  border: 1px solid rgb(77, 77, 225, 1);
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 6px;
  color: rgb(77, 77, 225, 1);
  background-color: #ffffff;
}

.navigationLink:hover {
  background-color: rgb(77, 77, 225, 0.1);
}
</style>
