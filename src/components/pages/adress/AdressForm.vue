<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import {  EMPTY_ADRESS_FORM, FORM_CAPTIONS } from '@/constants/adress-form'
import { computed, onMounted } from 'vue'
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const { completeFormStep } = formStore
const { formData, currentStepId } = storeToRefs(formStore)
const adressFormData = computed(() => {
  return formData.value.adress.data
})

const resetForm = (e: Event) => {
  e.preventDefault()

  completeFormStep('adress', EMPTY_ADRESS_FORM)
}

onMounted(() => {
  currentStepId.value = 'adress'
})
</script>

<template>
  <form @submit="resetForm" class="adressForm">
    <h3 class="adressFormHeader">{{ FORM_CAPTIONS.FORM_HEADER }}</h3>
    <fieldset class="adressFormFieldset">
      <InputText v-model="adressFormData.city" :placeholder="FORM_CAPTIONS.CITY" />
      <InputText v-model="adressFormData.district" :placeholder="FORM_CAPTIONS.DISTRICT" />
      <InputText v-model="adressFormData.locality" :placeholder="FORM_CAPTIONS.LOCALITY" />
      <InputText v-model="adressFormData.street" :placeholder="FORM_CAPTIONS.STREET" />
      <InputText v-model="adressFormData.building" :placeholder="FORM_CAPTIONS.BUILDING" />
      <InputText v-model="adressFormData.case" :placeholder="FORM_CAPTIONS.CASE" />
      <InputText v-model="adressFormData.apartment" :placeholder="FORM_CAPTIONS.APARTMENT" />
      <InputText v-model="adressFormData.entrance" :placeholder="FORM_CAPTIONS.ENTRANCE" />
      <InputText v-model="adressFormData.entranceCode" :placeholder="FORM_CAPTIONS.ENTRANCE_CODE" />
      <InputText v-model="adressFormData.floor" :placeholder="FORM_CAPTIONS.FLOOR" />
    </fieldset>
    <Button type="submit" class="submitButton">Отправить</Button>
  </form>
</template>

<style scoped>
.adressFormHeader {
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
}

.adressForm {
  margin-bottom: 32px;
  max-width: 600px;
}
.adressFormFieldset {
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 560px;
  margin-bottom: 24px;
  padding: 0;
}

.adressFormFieldset > :is(div, span) {
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
