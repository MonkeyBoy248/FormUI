import type { RadioButtonGroup } from '@/components/shared/RadioButtonGroup.vue'
import type { AnamnesisFormData } from '@/types/anamnesis'

export const buildAnamnesisFormConfig = (): RadioButtonGroup[] => {
  return [
    {
      id: 'generalState',
      groupTitle: 'Общее состояние:',
      radioButtons: [
        {
          name: 'generalState',
          inputId: 'GeneralStateSatisfactory',
          value: 'Satisfactory',

          label: 'Удовлетворительное'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateMedium',
          value: 'Medium',

          label: 'Средней степени тяжести'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateSevere',
          value: 'Severe',

          label: 'Тяжелое'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateTerminal',
          value: 'Terminal',

          label: 'Терминальное'
        },
        {
          name: 'generalState',
          inputId: 'GeneralStateDeath',
          value: 'Death',

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

          label: 'Спокойное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorAgitated',
          value: 'Agitated',

          label: 'Возбужденное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorAgressive',
          value: 'Agressive',

          label: 'Агрессивное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorDepressive',
          value: 'Depressive',

          label: 'Депресивное'
        },
        {
          name: 'behavior',
          inputId: 'BehaviorDeath',
          value: 'Death',

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

          label: 'Ясное'
        },
        {
          name: 'condition',
          inputId: 'ConditionStun',
          value: 'Stun',

          label: 'Оглушение'
        },
        {
          name: 'condition',
          inputId: 'ConditionSopor',
          value: 'Sopor',

          label: 'Сопор'
        },
        {
          name: 'condition',
          inputId: 'ConditionComa',
          value: 'Coma',

          label: 'Кома'
        },
        {
          name: 'condition',
          inputId: 'ConditionAbsent',
          value: 'Absent',

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

          label: 'Нет'
        },
        {
          name: 'anisocoria',
          inputId: 'AnisocoriaTrue',
          value: 'True',

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

          label: 'Нет'
        },
        {
          name: 'nystagmus',
          inputId: 'NystagmusTrue',
          value: 'True',

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

          label: 'Обычные (нормальные)'
        },
        {
          name: 'skinState',
          inputId: 'Hypermized',
          value: 'Hypermized',

          label: 'Гипермированные'
        },
        {
          name: 'skinState',
          inputId: 'DryOrWet',
          value: 'DryOrWet',

          label: 'Сухие/влажные'
        },
        {
          name: 'skinState',
          inputId: 'SkinPale',
          value: 'Pale',

          label: 'Бледные'
        },
        {
          name: 'skinState',
          inputId: 'SkinJaundiced',
          value: 'Jaundiced',

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

          label: 'Везикулярное/пуэрильное'
        },
        {
          name: 'breathing',
          inputId: 'BreathingHarsh',
          value: 'Harsh',

          label: 'Жесткое'
        },
        {
          name: 'breathing',
          inputId: 'BreathingBronchial',
          value: 'Bronchial',

          label: 'Бронхиальное'
        },
        {
          name: 'breathing',
          inputId: 'BreathingWeak',
          value: 'Weak',

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

          label: 'Есть'
        },
        {
          name: 'wheezes',
          inputId: 'WheezesDry',
          value: 'Dry',

          label: 'Сухие'
        },
        {
          name: 'wheezes',
          inputId: 'WheezesWet',
          value: 'Wet',

          label: 'Влажные'
        },
        {
          name: 'wheezes',
          inputId: 'WheezesCrepitus',
          value: 'Crepitus',

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

          label: 'Ритмичные'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsArrhythmic',
          value: 'Arrhythmic',

          label: 'Аритмичные'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsAbsent',
          value: 'Absent',

          label: 'Отсутствуют'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsClear',
          value: 'Clear',

          label: 'Ясные'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsDull',
          value: 'Dull',

          label: 'Глухие'
        },
        {
          name: 'heartSounds',
          inputId: 'HeartSoundsMuffled',
          value: 'Muffled',

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

          label: 'Нормальный'
        },
        {
          name: 'pulse',
          inputId: 'PulseTense',
          value: 'Tense',

          label: 'Напряженный'
        },
        {
          name: 'pulse',
          inputId: 'PulseThreaded',
          value: 'Threaded',

          label: 'Нитевидный'
        },
        {
          name: 'pulse',
          inputId: 'PulseRythmycal',
          value: 'Rythmycal',

          label: 'Ритмичный'
        },
        {
          name: 'pulse',
          inputId: 'PulseWeak',
          value: 'Weak',

          label: 'Слабого наполнения'
        },
        {
          name: 'pulse',
          inputId: 'PulseAbsent',
          value: 'Absent',

          label: 'Отсутствует'
        },
        {
          name: 'pulse',
          inputId: 'PulseArrythmycal',
          value: 'Arrythmycal',

          label: 'Аритмичный'
        },
        {
          name: 'pulse',
          inputId: 'PulseDeficit',
          value: 'Deficit',

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

          label: 'Влажный'
        },
        {
          name: 'tongue',
          inputId: 'TongueDry',
          value: 'Dry',

          label: 'Сухой'
        },
        {
          name: 'tongue',
          inputId: 'TongueClean',
          value: 'Clean',

          label: 'Чистый'
        },
        {
          name: 'tongue',
          inputId: 'TonguePlaque',
          value: 'Plaque',

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

          label: 'Мягкий'
        },
        {
          name: 'belly',
          inputId: 'BellyTense',
          value: 'Tense',

          label: 'Напряжен'
        },
        {
          name: 'belly',
          inputId: 'BellyPainless',
          value: 'Painless',

          label: 'Безболезненный'
        },
        {
          name: 'belly',
          inputId: 'BellyPainful',
          value: 'Painful',

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
  generalState: '',
  behavior: '',
  condition: '',
  anisocoria: '',
  nystagmus: '',
  skinState: '',
  breathing: '',
  wheezes: '',
  heartSounds: '',
  pulse: '',
  tongue: '',
  belly: '',
  additionalObjectiveData: '',
  neurologicalStatus: ''
}
