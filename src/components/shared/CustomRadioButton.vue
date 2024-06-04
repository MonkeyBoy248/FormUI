<script setup lang="ts">
import RadioButton, { type RadioButtonProps } from 'primevue/radiobutton'
const props = defineProps<RadioButtonProps>()

defineEmits(['update:modelValue'])
</script>
<template>
  <RadioButton
    v-bind="props"
    :model-value="props.modelValue"
    
    @change="$emit('update:modelValue', props.value)"
    :pt="{
      box: {
        class: 'customRadioBox'
      },
      icon: {
        class: 'customRadioIcon'
      }
    }"
  />
</template>
<style>
.customRadioBox {
  border-radius: 20%;
}

.customRadioIcon {
  border-radius: 20%;
}
</style>
