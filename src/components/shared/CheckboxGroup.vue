<script setup lang="ts">
type RadioButtonGroup = {
  groupTitle: string
  radioButtons: {
    name: string
    value: string
    inputId: string
    model: string
    label: string
  }[]
}

const props = defineProps<RadioButtonGroup>()
</script>

<template>
  <div>
    <strong>{{ props.groupTitle }}</strong>
    <div class="radioWrapper" v-for="radio in props.radioButtons" :key="radio.inputId">
      <label :for="radio.inputId">{{ radio.label }}</label>
      <RadioButton
        v-model="radio.model"
        :inputId="radio.inputId"
        :name="radio.name"
        :value="radio.value"
      />
    </div>
  </div>
</template>

<style scoped></style>
