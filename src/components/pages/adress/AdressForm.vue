<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { EMPTY_ADRESS_FORM, FORM_CAPTIONS } from '@/constants/adress-form'
import { ref } from 'vue'
import type { AdressFormData } from '@/types/adress-form'

const formData = ref<AdressFormData>({ ...EMPTY_ADRESS_FORM })

const resetForm = (e: Event) => {
  e.preventDefault()

  formData.value = { ...EMPTY_ADRESS_FORM }
}
</script>

<template>
  <form @submit="resetForm" class="adressForm">
    <h3 class="adressFormHeader">{{ FORM_CAPTIONS.FORM_HEADER }}</h3>
    <fieldset class="adressFormFieldset">
      <InputText
        v-model="formData.city"
        :placeholder="FORM_CAPTIONS.CITY"
      />
      <InputText
        v-model="formData.district"
        :placeholder="FORM_CAPTIONS.DISTRICT"
      />
      <InputText
        v-model="formData.locality"
        :placeholder="FORM_CAPTIONS.LOCALITY"
      />
      <InputText
        v-model="formData.street"
        :placeholder="FORM_CAPTIONS.STREET"
      />
      <InputText
        v-model="formData.building"
        :placeholder="FORM_CAPTIONS.BUILDING"
      />
      <InputText
        v-model="formData.case"
        :placeholder="FORM_CAPTIONS.CASE"
      />
      <InputText
        v-model="formData.apartment"
        :placeholder="FORM_CAPTIONS.APARTMENT"
      />
      <InputText
        v-model="formData.entrance"
        :placeholder="FORM_CAPTIONS.ENTRANCE"
      />
      <InputText
        v-model="formData.entranceCode"
        :placeholder="FORM_CAPTIONS.ENTRANCE_CODE"
      />
      <InputText
        v-model="formData.floor"
        :placeholder="FORM_CAPTIONS.FLOOR"
      />
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
