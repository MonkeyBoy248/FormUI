import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_FORM_DATA } from '@/constants/form'
import type { FormStepName } from '@/types/form'

export const useFormStore = defineStore('form', () => {
  const formData = ref({...DEFAULT_FORM_DATA})
  const currentStepId = ref<FormStepName>('adress')

  const isLastStepId = computed(() => {
    return currentStepId.value === 'anamnesis'
  })

  const getFormStepData = (step: FormStepName) => {
    return formData.value[step].data
  }

  const completeFormStep = (step: FormStepName, newData: Record<string, any>) => {
    formData.value[step] = {
      data: {...newData},
      isCompleted: true
    }
  }

  const updateFormStepData = (step: FormStepName, newData: Record<string, any>) => {
    formData.value[step].data = {
      ...formData.value[step].data,
      ...newData
    }
  }

  return {
    formData,
    isLastStepId,
    currentStepId,
    getFormStepData,
    updateFormStepData,
    completeFormStep
  }
})
