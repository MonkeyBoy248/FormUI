import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_FORM_DATA } from '@/constants/form'
import type { FormStepName } from '@/types/form'
import type { FormStep } from '@/types/form-step-link'

export const useFormStore = defineStore('form', () => {
  const formData = ref({ ...DEFAULT_FORM_DATA })
  const formStepsMap = ref<Record<FormStepName, FormStep>>({
    adress: {
      id: 'adress',
      to: 'form/adress',
      description: 'Адрес вызова',
      nextStepId: 'patientInfo'
    },
    patientInfo: {
      id: 'patientInfo',
      to: 'form/patient-info',
      description: 'Сведения о больном',
      nextStepId: 'issuer'
    },
    issuer: {
      id: 'issuer',
      to: 'form/issuer',
      description: 'Кто вызывал',
      nextStepId: 'patientCurrentState'
    },
    patientCurrentState: {
      id: 'patientCurrentState',
      to: 'form/patient-current-state',
      description: 'Текущее состояние больного',
      nextStepId: 'anamnesis'
    },
    anamnesis: {
      id: 'anamnesis',
      to: 'form/anamnesis',
      description: 'Анамнез',
      nextStepId: null
    }
  })
  const currentStep = computed<FormStep>(() => formStepsMap.value[currentStepId.value])
  const currentStepId = ref<FormStepName>('adress')
  const nextStep = computed<FormStep | null>(() => {
    if (!currentStep.value.nextStepId) {
      return null
    }

    return formStepsMap.value[currentStep.value.nextStepId]
  })

  const formSteps = computed<FormStep[]>(() => {
    return Object.values(formStepsMap.value)
  })

  const isLastStepId = computed(() => {
    return !formStepsMap.value[currentStepId.value].nextStepId
  })

  const getFormStepData = (step: FormStepName) => {
    return formData.value[step].data
  }

  const completeFormStep = (step: FormStepName, newData: Record<string, any>) => {
    formData.value[step] = {
      data: { ...newData },
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
    formSteps,
    formStepsMap,
    isLastStepId,
    currentStepId,
    currentStep,
    nextStep,
    getFormStepData,
    updateFormStepData,
    completeFormStep
  }
})
