<script setup lang="ts">
import FormStepLink from '@/components/pages/main/FormStepLink.vue'

import type { FormStep } from '@/types/form-step-link'

const FORM_STEPS: Omit<FormStep, 'index'>[] = [
  {
    to: '/adress',
    description: 'Адрес вызова'
  },
  {
    to: '/patient-info',
    description: 'Сведения о больном'
  },
  {
    to: '/issuer',
    description: 'Кто вызывал'
  },
  {
    to: '/patient-current-state',
    description: 'Текущее состояние больного'
  },
  {
    to: '/anamnesis',
    description: 'Анамнез'
  }
]

const buildStepItem = (step: Omit<FormStep, 'index'>, index: number): FormStep => {
  return {
    ...step,
    index
  }
}
</script>

<template>
  <div>
    <h2 class="navigationHeader">Заполните данные</h2>
    <nav class="navigationWrapper">
      <FormStepLink
        v-for="(step, index) in FORM_STEPS"
        :step="buildStepItem(step, index + 1)"
        :key="step.to"
      />
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
