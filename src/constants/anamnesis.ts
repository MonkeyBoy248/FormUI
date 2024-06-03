import type { RadioButtonGroup } from '@/components/shared/CheckboxGroup.vue'
import { useFormStore } from '@/stores/form'
import type { AnamnesisFormData } from '@/types/anamnesis'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

export const buildAnamnesisFormConfig = (
  formData: ComputedRef<AnamnesisFormData>
): RadioButtonGroup[] => {
  return [
    {
      id: 'generalState',
      groupTitle: 'Общее состояние:',
      radioButtons: [
        {
          name: 'generalState',
          inputId: 'GeneralStateSatisfactory',
          value: 'Satisfactory',
          model: formData.value.generalState,
          label: 'Удовлетворительное'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateMedium',
          value: 'Medium',
          model: formData.value.generalState,
          label: 'Средней степени тяжести'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateSevere',
          value: 'Severe',
          model: formData.value.generalState,
          label: 'Тяжелое'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateTerminal',
          value: 'Terminal',
          model: formData.value.generalState,
          label: 'Терминальное'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateDeath',
          value: 'Death',
          model: formData.value.generalState,
          label: 'Смерть'
        }
      ]
    },
    {
      id: 'behavior',
      groupTitle: 'Поведение:',
      radioButtons: [
        {
          name: 'behavior',
          inputId: 'BehaviorCalm',
          value: 'Calm',
          model: formData.value.behavior,
          label: 'Спокойное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorAgitated',
          value: 'Agitated',
          model: formData.value.behavior,
          label: 'Возбужденное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorAgressive',
          value: 'Agressive',
          model: formData.value.behavior,
          label: 'Агрессивное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorDepressive',
          value: 'Depressive',
          model: formData.value.behavior,
          label: 'Депресивное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorDeath',
          value: 'Death',
          model: formData.value.behavior,
          label: 'Смерть'
        }
      ]
    },
    {
      id: 'condition',
      groupTitle: 'Состояние:',
      radioButtons: [
        {
          name: 'condition',
          inputId: 'ConditionClear',
          value: 'Clear',
          model: formData.value.condition,
          label: 'Ясное'
        },
        {
          name: 'condition',
          inputId: 'ConditionStun',
          value: 'Stun',
          model: formData.value.condition,
          label: 'Оглушение'
        },
        {
          name: 'condition',
          inputId: 'ConditionSopor',
          value: 'Sopor',
          model: formData.value.condition,
          label: 'Сопор'
        },
        {
          name: 'condition',
          inputId: 'ConditionComa',
          value: 'Coma',
          model: formData.value.condition,
          label: 'Кома'
        },
        {
          name: 'condition',
          inputId: 'ConditionAbsent',
          value: 'Absent',
          model: formData.value.condition,
          label: 'Отсутствует'
        }
      ]
    },
    {
      id: 'anisocoria',
      groupTitle: 'Анизокория:',
      radioButtons: [
        {
          name: 'anisocoria',
          inputId: 'AnisocoriaFalse',
          value: 'False',
          model: formData.value.anisocoria,
          label: 'Нет'
        },
        {
          name: 'anisocoria',
          inputId: 'AnisocoriaTrue',
          value: 'True',
          model: formData.value.anisocoria,
          label: 'Есть'
        }
      ]
    },
    {
      id: 'nystagmus',
      groupTitle: 'Нистагм:',
      radioButtons: [
        {
          name: 'nystagmus',
          inputId: 'NystagmusFalse',
          value: 'False',
          model: formData.value.nystagmus,
          label: 'Нет'
        },
        {
          name: 'nystagmus',
          inputId: 'NystagmusTrue',
          value: 'True',
          model: formData.value.anisocoria,
          label: 'Есть'
        }
      ]
    },
    {
      id: 'skinState',
      groupTitle: 'Кожные покровы:',
      radioButtons: [
        {
          name: 'skinState',
          inputId: 'SkinNormal',
          value: 'Normal',
          model: formData.value.skinState,
          label: 'Обычные (нормальные)'
        },
        {
          name: 'skinState',
          inputId: 'Hypermized',
          value: 'Hypermized',
          model: formData.value.skinState,
          label: 'Гипермированные'
        },
        {
          name: 'skinState',
          inputId: 'DryOrWet',
          value: 'DryOrWet',
          model: formData.value.skinState,
          label: 'Сухие/влажные'
        },
        {
          name: 'skinState',
          inputId: 'SkinPale',
          value: 'Pale',
          model: formData.value.skinState,
          label: 'Бледные'
        },
        {
          name: 'skinState',
          inputId: 'SkinJaundiced',
          value: 'Jaundiced',
          model: formData.value.skinState,
          label: 'Желтушные'
        }
      ]
    },
    {
      id: 'breathing',
      groupTitle: 'Дыхание:',
      radioButtons: [
        {
          name: 'breathing',
          inputId: 'VesicularOrPuerile',
          value: 'VesicularOrPuerile',
          model: formData.value.breathing,
          label: 'Везикулярное/пуэрильное'
        },
        {
          name: 'breathing',
          inputId: 'BreathingHarsh',
          value: 'Harsh',
          model: formData.value.breathing,
          label: 'Жесткое'
        },
        {
          name: 'breathing',
          inputId: 'BreathingBronchial',
          value: 'Bronchial',
          model: formData.value.breathing,
          label: 'Бронхиальное'
        },
        {
          name: 'breathing',
          inputId: 'BreathingWeak',
          value: 'Weak',
          model: formData.value.breathing,
          label: 'Ослабленное'
        }
      ]
    },
    {
      id: 'wheezes',
      groupTitle: 'Хрипы:',
      radioButtons: [
        {
          name: 'wheezes',
          inputId: 'WheezesTrue',
          value: 'True',
          model: formData.value.wheezes,
          label: 'Есть'
        },
        {
          name: 'wheezes',
          inputId: 'WheezesDry',
          value: 'Dry',
          model: formData.value.wheezes,
          label: 'Сухие'
        },
        {
          name: 'wheezes',
          inputId: 'WheezesWet',
          value: 'Wet',
          model: formData.value.wheezes,
          label: 'Влажные'
        },
        {
          name: 'wheezes',
          inputId: 'WheezesCrepitus',
          value: 'Crepitus',
          model: formData.value.wheezes,
          label: 'Крепитация'
        }
      ]
    },
    {
      id: 'heartSounds',
      groupTitle: 'Тоны сердца:',
      radioButtons: [
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsRythmycal',
          value: 'Rythmycal',
          model: formData.value.heartSounds,
          label: 'Ритмичные'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsArrhythmic',
          value: 'Arrhythmic',
          model: formData.value.heartSounds,
          label: 'Аритмичные'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsAbsent',
          value: 'Absent',
          model: formData.value.heartSounds,
          label: 'Отсутствуют'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsClear',
          value: 'Clear',
          model: formData.value.heartSounds,
          label: 'Ясные'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsDull',
          value: 'Dull',
          model: formData.value.heartSounds,
          label: 'Глухие'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsMuffled',
          value: 'Muffled',
          model: formData.value.heartSounds,
          label: 'Приглушенны'
        }
      ]
    },
    {
      id: 'pulse',
      groupTitle: 'Тоны сердца:',
      radioButtons: [
        {
          name: 'pulse',
          inputId: 'PulseNormal',
          value: 'Normal',
          model: formData.value.pulse,
          label: 'Нормальный'
        },
        {
          name: 'pulse',
          inputId: 'PulseTense',
          value: 'Tense',
          model: formData.value.pulse,
          label: 'Напряженный'
        },
        {
          name: 'pulse',
          inputId: 'PulseThreaded',
          value: 'Threaded',
          model: formData.value.pulse,
          label: 'Нитевидный'
        },
        {
          name: 'pulse',
          inputId: 'PulseRythmycal',
          value: 'Rythmycal',
          model: formData.value.pulse,
          label: 'Ритмичный'
        },
        {
          name: 'pulse',
          inputId: 'PulseWeak',
          value: 'Weak',
          model: formData.value.pulse,
          label: 'Слабого наполнения'
        },
        {
          name: 'pulse',
          inputId: 'PulseAbsent',
          value: 'Absent',
          model: formData.value.pulse,
          label: 'Отсутствует'
        },
        {
          name: 'pulse',
          inputId: 'PulseArrythmycal',
          value: 'Arrythmycal',
          model: formData.value.pulse,
          label: 'Аритмичный'
        },
        {
          name: 'pulse',
          inputId: 'PulseDeficit',
          value: 'Deficit',
          model: formData.value.pulse,
          label: 'Дефицит пульса'
        }
      ]
    },
    {
      id: 'tongue',
      groupTitle: 'Язык:',
      radioButtons: [
        {
          name: 'tongue',
          inputId: 'TongueWet',
          value: 'Wet',
          model: formData.value.tongue,
          label: 'Влажный'
        },
        {
          name: 'tongue',
          inputId: 'TongueDry',
          value: 'Dry',
          model: formData.value.tongue,
          label: 'Сухой'
        },
        {
          name: 'tongue',
          inputId: 'TongueClean',
          value: 'Clean',
          model: formData.value.tongue,
          label: 'Чистый'
        },
        {
          name: 'tongue',
          inputId: 'TonguePlaque',
          value: 'Plaque',
          model: formData.value.tongue,
          label: 'Обложен'
        }
      ]
    },
    {
      id: 'belly',
      groupTitle: 'Живот:',
      radioButtons: [
        {
          name: 'belly',
          inputId: 'BellySoft',
          value: 'Soft',
          model: formData.value.belly,
          label: 'Мягкий'
        },
        {
          name: 'belly',
          inputId: 'BellyTense',
          value: 'Tense',
          model: formData.value.belly,
          label: 'Напряжен'
        },
        {
          name: 'belly',
          inputId: 'BellyPainless',
          value: 'Painless',
          model: formData.value.belly,
          label: 'Безболезненный'
        },
        {
          name: 'belly',
          inputId: 'BellyPainful',
          value: 'Painful',
          model: formData.value.belly,
          label: 'Болезненный'
        }
      ]
    }
  ]
}

export const FORM_CAPTIONS = {
  FORM_HEADER: 'Анамнез',
  LIFE_ANAMNESIS: 'Анамнез жизни',
  ATTACK_ANAMNESIS: 'Анамнез приступа',
  COMPLAINS: 'Жалобы',
  MEDICATIONS_TAKEN: 'Принимаемые препараты',
  ALLERGY_ANAMNESIS: 'Аллергоанамнез',
  OBJECTIVE_DATA: 'Объективные данные',
  ADDITIONAL_OBJECTIVE_DATA: 'Дполнительные объективные данные',
  NEUROLOGICAL_STATUS: 'Неврологический статус'
}

export const EMPTY_ANAMNESIS_FORM: AnamnesisFormData = {
  lifeAnamnesis: '',
  attackAnamnesis: '',
  allergyAnamnesis: '',
  complains: '',
  medicationsTaken: '',
  generalState: 'Satisfactory',
  behavior: 'Calm',
  condition: 'Clear',
  anisocoria: 'False',
  nystagmus: 'False',
  skinState: 'Normal',
  breathing: 'Vesicular',
  wheezes: 'False',
  heartSounds: 'Rythmycal',
  pulse: 'Normal',
  tongue: 'Wet',
  belly: 'Soft',
  additionalObjectiveData: '',
  neurologicalStatus: ''
}
