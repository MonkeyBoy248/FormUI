<script setup lang="ts">
import Button from 'primevue/button'
import RadioButtonGroup from '@/components/shared/RadioButtonGroup.vue'
import { computed, onMounted } from 'vue'
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'

import {
  EMPTY_PATIENT_CURRENT_STATE_FORM,
  buildPatientCurrentStateFormConfig
} from '@/constants/patient-current-state'
import type { PatientCurrentStateFormData } from '@/types/patient-current-state'

const FORM_HEADER = 'Сведения о больном'

const formStore = useFormStore()
const { completeFormStep } = formStore
const { currentStepId, formData } = storeToRefs(formStore)

const resetForm = (e: Event) => {
  e.preventDefault()

  completeFormStep('patientCurrentState', EMPTY_PATIENT_CURRENT_STATE_FORM)
}

const patientCurrentStateFormData = computed<PatientCurrentStateFormData>(() => {
  return formData.value.patientCurrentState.data as PatientCurrentStateFormData
})

const radioButtonGroups = buildPatientCurrentStateFormConfig()

onMounted(() => {
  currentStepId.value = 'patientCurrentState'
})
</script>

<template>
  <form @submit="resetForm" class="patientCurrentStateForm">
    <h3 class="patientCurrentStateFormHeader">{{ FORM_HEADER }}</h3>
    <fieldset class="patientCurrentStateFormFieldset">
      <RadioButtonGroup
        v-model="patientCurrentStateFormData[group.id as keyof PatientCurrentStateFormData]"
        v-for="group in radioButtonGroups"
        :key="group.id"
        :group="group"
      />
    </fieldset>
    <Button type="submit" class="submitButton">Отправить</Button>
  </form>
</template>

<style scoped>
.patientCurrentStateFormHeader {
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
}

.patientCurrentStateForm {
  margin-bottom: 32px;
  max-width: 600px;
}

.patientCurrentStateFormFieldset {
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 560px;
  margin-bottom: 24px;
  padding: 0;
}

.patientCurrentStateFormFieldset > :is(div, span) {
  min-width: 250px;
}
.submitButton {
  background-color: rgba(41, 41, 232, 0.8);
  border: none;
  padding: 12px 16px;
}

.submitButton:hover {
  background-color: rgb(77, 77, 225, 1);
}
</style>
