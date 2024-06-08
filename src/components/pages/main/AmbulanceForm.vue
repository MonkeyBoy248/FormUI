<script setup lang="ts">
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import {
  FORM_CAPTIONS,
  FORM_SELECTORS_DATA,
  EMPTY_AMBULANCE_FORM
} from '@/constants/ambulance-form'
import { onUnmounted, ref } from 'vue'
import type { AmbulanceFormData } from '@/types/ambulance-form'

const formData = ref<AmbulanceFormData>({ ...EMPTY_AMBULANCE_FORM })

const resetForm = (e: Event) => {
  e.preventDefault()

  formData.value = { ...EMPTY_AMBULANCE_FORM }
}

onUnmounted(() => {
  formData.value = { ...EMPTY_AMBULANCE_FORM }
})
</script>

<template>
  <form @submit="resetForm" class="ambulanceForm">
    <h3 class="ambulanceFormHeader">{{ FORM_CAPTIONS.FORM_HEADER }}</h3>
    <fieldset class="ambulanceFormFieldset">
      <Dropdown
        :options="FORM_SELECTORS_DATA.doctorPhoneNumbers"
        v-model="formData.doctorPhone"
        :placeholder="FORM_CAPTIONS.DOCTOR_PHONE_NUMBER"
      />
      <Dropdown
        :options="FORM_SELECTORS_DATA.stationNumbers"
        v-model="formData.stationNumber"
        :placeholder="FORM_CAPTIONS.STATION_NUMBER"
      />
      <Dropdown
        :options="FORM_SELECTORS_DATA.crewNumbers"
        v-model="formData.crewNumber"
        :placeholder="FORM_CAPTIONS.CREW_NUMBER"
      />
      <Calendar
        v-model="formData.dateOfCall"
        showIcon
        iconDisplay="input"
        date-format="dd.mm.yy"
        :placeholder="FORM_CAPTIONS.DATE_OF_CALL"
      />
      <Calendar
        v-model="formData.arriavalTime"
        timeOnly
        :placeholder="FORM_CAPTIONS.ARRIVAL_TIME"
      />
      <Calendar
        v-model="formData.endOfCallTime"
        timeOnly
        :placeholder="FORM_CAPTIONS.END_OF_CALL_TIME"
      />
    </fieldset>
    <Button class="submitButton" type="submit">Отправить</Button>
  </form>
</template>

<style scoped>
.ambulanceFormHeader {
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
}

.ambulanceForm {
  margin-bottom: 32px;
  max-width: 600px;
}
.ambulanceFormFieldset {
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 560px;
  margin-bottom: 24px;
  padding: 0;
}

.ambulanceFormFieldset > :is(div, span) {
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
