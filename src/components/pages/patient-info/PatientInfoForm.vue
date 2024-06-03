<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import { computed, onMounted } from 'vue'
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'
import type { PatientInfoFormData } from '@/types/patient-info'
import { EMPTY_PATIENT_INFO_FORM, FORM_CAPTIONS } from '@/constants/patient-info'

const formStore = useFormStore()
const { completeFormStep } = formStore
const { formData, currentStepId } = storeToRefs(formStore)

const patientFormData = computed<PatientInfoFormData>(() => {
  return formData.value.patientInfo.data as PatientInfoFormData
})

const resetForm = (e: Event) => {
  e.preventDefault()

  completeFormStep('patientInfo', EMPTY_PATIENT_INFO_FORM)
}

onMounted(() => {
  currentStepId.value = 'patientInfo'
})
</script>

<template>
  <form @submit="resetForm" class="patientInfoForm">
    <h3 class="patientInfoFormHeader">{{ FORM_CAPTIONS.FORM_HEADER }}</h3>
    <fieldset class="patientInfoFormFieldset">
      <InputText v-model="patientFormData.surname" :placeholder="FORM_CAPTIONS.SURNAME" />
      <InputText v-model="patientFormData.name" :placeholder="FORM_CAPTIONS.NAME" />
      <InputText v-model="patientFormData.patronymic" :placeholder="FORM_CAPTIONS.PATRONYMIC" />
      <InputText v-model="patientFormData.age" :placeholder="FORM_CAPTIONS.AGE" />
      <div class="genderRadioWrapper">
        {{ FORM_CAPTIONS.GENDER }}
        <div class="radioWrapper">
          <label for="Male">М</label>
          <RadioButton
            class="radio"
            v-model="patientFormData.gender"
            inputId="Male"
            name="gender"
            value="Male"
          />
        </div>
        <div class="radioWrapper">
          <label for="Female">Ж</label>
          <RadioButton
            v-model="patientFormData.gender"
            inputId="Female"
            name="gender"
            value="Female"
          />
        </div>
      </div>
      <InputText v-model="patientFormData.job" :placeholder="FORM_CAPTIONS.JOB" />
      <InputText
        v-model="patientFormData.identityDocument"
        :placeholder="FORM_CAPTIONS.ID_DOCUMENT"
      />
    </fieldset>
    <Button type="submit" class="submitButton">Отправить</Button>
  </form>
</template>

<style scoped>
.patientInfoFormHeader {
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
}

.patientInfoForm {
  margin-bottom: 32px;
  max-width: 600px;
}

.patientInfoFormFieldset {
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 560px;
  margin-bottom: 24px;
  padding: 0;
}

.patientInfoFormFieldset > :is(div, span) {
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

.genderRadioWrapper {
  display: flex;
  gap: 12px;
  align-items: center;
}

.radioWrapper {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
