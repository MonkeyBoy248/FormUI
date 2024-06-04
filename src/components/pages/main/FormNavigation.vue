<script setup lang="ts">
import FormStepLink from '@/components/pages/main/FormStepLink.vue'
import { useFormStore } from '@/stores/form'

import type { FormStep } from '@/types/form-step-link'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const formStore = useFormStore()
const { formData, formSteps } = storeToRefs(formStore)

const buildStepItem = (step: FormStep, index: number): FormStep => {
  return {
    ...step,
    index
  }
}

const stepItems = computed(() => {
  return formSteps.value.map((step, index) => {
    const isCompleted = formData.value[step.id].isCompleted
    const formattedStep = buildStepItem(step, index + 1)

    return {
      ...formattedStep,
      isCompleted
    }
  })
})
</script>

<template>
  <div>
    <h2 class="navigationHeader">Заполните данные</h2>
    <nav class="navigationWrapper">
      <FormStepLink v-for="step in stepItems" :step="step" :key="step.to" />
    </nav>
  </div>
</template>

<style scoped>
.navigationHeader {
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
}
.navigationWrapper {
  display: flex;
  gap: 24px;
  justify-content: center;
}
</style>
