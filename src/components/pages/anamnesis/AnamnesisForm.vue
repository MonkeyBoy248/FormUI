<script setup lang="ts">
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import RadioButtonGroup from '@/components/shared/RadioButtonGroup.vue'
import {
  EMPTY_ANAMNESIS_FORM,
  FORM_CAPTIONS,
  buildAnamnesisFormConfig
} from '@/constants/anamnesis'
import { computed, onMounted, onUnmounted } from 'vue'
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'

import type { AnamnesisFormData } from '@/types/anamnesis'

const formStore = useFormStore()
const { completeFormStep, updateFormStepData } = formStore
const { formData, currentStepId } = storeToRefs(formStore)

const anamnesisFormData = computed<AnamnesisFormData>(() => {
  return formData.value.anamnesis.data as AnamnesisFormData
})

const resetForm = (e: Event) => {
  e.preventDefault()

  completeFormStep('anamnesis', EMPTY_ANAMNESIS_FORM)
}

const radioButtonGroups = buildAnamnesisFormConfig()

onMounted(() => {
  currentStepId.value = 'anamnesis'
})

onUnmounted(() => {
  updateFormStepData('anamnesis', EMPTY_ANAMNESIS_FORM)
})
</script>

<template>
  <form @submit="resetForm" class="anamnesisForm">
    <h3 class="anamnesisFormHeader">{{ FORM_CAPTIONS.FORM_HEADER }}</h3>
    <fieldset class="anamnesisFormFieldset">
      <div class="anamnesisTextAreaWrapper">
        <Textarea
          v-model="anamnesisFormData.lifeAnamnesis"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.LIFE_ANAMNESIS"
        ></Textarea>
        <Textarea
          v-model="anamnesisFormData.attackAnamnesis"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.ATTACK_ANAMNESIS"
        ></Textarea>
        <Textarea
          v-model="anamnesisFormData.complains"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.COMPLAINS"
        ></Textarea>
        <Textarea
          v-model="anamnesisFormData.medicationsTaken"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.MEDICATIONS_TAKEN"
        ></Textarea>
        <Textarea
          v-model="anamnesisFormData.allergyAnamnesis"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.ALLERGY_ANAMNESIS"
        ></Textarea>
      </div>
      <p>{{ FORM_CAPTIONS.OBJECTIVE_DATA }}</p>
      <RadioButtonGroup
        v-model="anamnesisFormData[group.id as keyof AnamnesisFormData]"
        v-for="group in radioButtonGroups"
        :key="group.id"
        :group="group"
      />
      <div class="anamnesisTextAreaWrapper">
        <Textarea
          v-model="anamnesisFormData.additionalObjectiveData"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.OBJECTIVE_DATA"
        ></Textarea>
        <Textarea
          v-model="anamnesisFormData.neurologicalStatus"
          autoResize
          rows="5"
          col="90"
          :placeholder="FORM_CAPTIONS.NEUROLOGICAL_STATUS"
        ></Textarea>
      </div>
    </fieldset>
    <Button type="submit" class="submitButton">Отправить</Button>
  </form>
</template>

<style scoped>
.anamnesisFormHeader {
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
}

.anamnesisForm {
  margin-bottom: 32px;
  max-width: 600px;
}

.anamnesisFormFieldset {
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 560px;
  margin-bottom: 24px;
  padding: 0;
}

.anamnesisFormFieldset > :is(div, span) {
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

.anamnesisTextAreaWrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
