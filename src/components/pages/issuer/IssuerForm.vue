<script setup lang="ts">
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Button from 'primevue/button'
import { computed } from 'vue'
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'
import { EMPTY_ISSUER_FORM, FORM_CAPTIONS } from '@/constants/issuer'
import type { IssuerFormData } from '@/types/issuer'
import { useToast } from 'primevue/usetoast'

const formStore = useFormStore()
const { completeFormStep } = formStore
const { formData } = storeToRefs(formStore)

const issuerFormData = computed<IssuerFormData>(() => {
  return formData.value.issuer.data as IssuerFormData
})

const toast = useToast()

const show = () => {
  toast.add({ severity: 'success', summary: 'Успешно!', detail: 'Данные записаны', life: 3000 })
}

const resetForm = (e: Event) => {
  e.preventDefault()

  completeFormStep('issuer', EMPTY_ISSUER_FORM)
  show()
}
</script>

<template>
  <form @submit="resetForm" class="patientInfoForm">
    <h3 class="patientInfoFormHeader">{{ FORM_CAPTIONS.FORM_HEADER }}</h3>
    <fieldset class="patientInfoFormFieldset">
      <InputText v-model="issuerFormData.surname" :placeholder="FORM_CAPTIONS.SURNAME" />
      <InputText v-model="issuerFormData.name" :placeholder="FORM_CAPTIONS.NAME" />
      <InputText v-model="issuerFormData.patronymic" :placeholder="FORM_CAPTIONS.PATRONYMIC" />
      <InputText v-model="issuerFormData.relationship" :placeholder="FORM_CAPTIONS.RELATIONSHIP" />
      <InputMask
        v-model="issuerFormData.phoneNumber"
        :placeholder="FORM_CAPTIONS.PHONE_NUMBER"
        mask="+9 (999) 999-9999"
      />
      <InputText v-model="issuerFormData.comment" :placeholder="FORM_CAPTIONS.COMMENT" />
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

.radio {
  border-radius: 10px;
}
</style>
