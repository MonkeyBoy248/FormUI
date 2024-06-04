<script setup lang="ts">
import CustomRadioButton from './CustomRadioButton.vue'

export type RadioButtonGroup = {
  id: string
  groupTitle: string
  onChange?: () => void
  radioButtons: {
    name: string
    value: string
    inputId: string
    label: string
  }[]
}

export type RadioButtonGroupProps = {
  group: RadioButtonGroup
  modelValue: string
}

defineEmits(['update:modelValue'])

const props = defineProps<RadioButtonGroupProps>()

</script>

<template>
  <div class="radioGroup">
    <strong class="radioGroupTitle">{{ props.group.groupTitle }}</strong>
    <div class="radioGroupWrapper">
      <div class="radioWrapper" v-for="radio in props.group.radioButtons" :key="radio.inputId">
        <CustomRadioButton
          :modelValue="props.modelValue"
          :inputId="radio.inputId"
          :name="radio.name"
          :value="radio.value"
          @change="$emit('update:modelValue', radio.value)"
        />
        <label :for="radio.inputId">{{ radio.label }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radioGroup {
  margin-bottom: 16px;
}

.radioGroupTitle {
  display: block;
  margin-bottom: 16px;
}
.radioGroupWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.radioWrapper {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}
</style>
computed, type type import { EMPTY_PATIENT_CURRENT_STATE_FORM } from
'@/constants/patient-current-state' import type { PatientCurrentStateFormData } from
'@/types/patient-current-state' import { storeToRefs } from 'pinia' computed, type type import type
{ PatientCurrentStateFormData } from '@/types/patient-current-state'
