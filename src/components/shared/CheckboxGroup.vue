<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'

export type RadioButtonGroup = {
  id: string
  groupTitle: string
  radioButtons: {
    name: string
    value: string
    inputId: string
    model: string
    label: string
  }[]
}

export type RadioButtonGroupProps = {
  group: RadioButtonGroup
}

const props = defineProps<RadioButtonGroupProps>()
</script>

<template>
  <div class="radioGroup">
    <strong class="radioGroupTitle">{{ props.group.groupTitle }}</strong>
    <div class="radioGroupWrapper">
      <div class="radioWrapper" v-for="radio in props.group.radioButtons" :key="radio.inputId">
        <RadioButton
          v-model="radio.model"
          :inputId="radio.inputId"
          :name="radio.name"
          :value="radio.value"
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
