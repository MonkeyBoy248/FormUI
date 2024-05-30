<script setup lang="ts">
import type { FormStep } from '@/types/form-step-link'
type FormStepProps = {
  step: FormStep
}
const props = defineProps<FormStepProps>()
</script>

<template>
  <div class="stepWrapper">
    <div class="stepLinkWrapper">
      <RouterLink class="stepLink" :to="props.step.to">{{ props.step.index }}</RouterLink>
    </div>
    <span class="stepLinkDescription">{{ props.step.description }}</span>
  </div>
</template>

<style scoped>
.stepWrapper {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.stepLinkWrapper {
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgb(192, 192, 192);
  display: flex;
  place-content: center;
  background-color: white;
}

.stepLinkWrapper:hover {
  background-color: rgb(77, 77, 225, 0.1);
}

.stepLink {
  text-decoration: none;
  color: rgb(77, 77, 225, 1);
  font-size: 24px;
  font-weight: 600;
  padding: 25px;
  text-align: center;
}

.stepLinkDescription {
  width: min-content;
  text-align: center;
}
</style>
