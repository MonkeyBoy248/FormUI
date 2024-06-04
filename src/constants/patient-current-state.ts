import type { RadioButtonGroup } from '@/components/shared/RadioButtonGroup.vue'
import type { PatientCurrentStateFormData } from '@/types/patient-current-state'
import { computed, type ComputedRef } from 'vue'

export const buildPatientCurrentStateFormConfig = (): ComputedRef<RadioButtonGroup[]> => {
  return computed(() => [
    {
      id: 'registration',
      groupTitle: 'Место регистрации больного:',
      radioButtons: [
        {
          name: 'registration',
          inputId: 'City',
          value: 'City',

          label: 'Город'
        },
        {
          name: 'registration',
          inputId: 'Countryside',
          value: 'Countryside',

          label: 'Сельская местность'
        },
        {
          name: 'registration',
          inputId: 'Stranger',
          value: 'Stranger',

          label: 'Приезжий'
        },
        {
          name: 'registration',
          inputId: 'Other',
          value: 'Other',

          label: 'Другое'
        }
      ]
    },
    {
      id: 'socialStatus',
      groupTitle: 'Социальное положение больного:',
      radioButtons: [
        {
          name: 'socialStatus',
          inputId: 'Employed',
          value: 'Employed',

          label: 'Работающий'
        },
        {
          name: 'socialStatus',
          inputId: 'Preschooler',
          value: 'Preschooler',

          label: 'Дошкольник'
        },
        {
          name: 'socialStatus',
          inputId: 'Student',
          value: 'Student',

          label: 'Учащийся'
        },
        {
          name: 'socialStatus',
          inputId: 'Unemployed',
          value: 'Unemployed',

          label: 'Безработный'
        },
        {
          name: 'socialStatus',
          inputId: 'Refugee',
          value: 'Refugee',

          label: 'Беженец'
        },
        {
          name: 'socialStatus',
          inputId: 'TemporaryUnemployed',
          value: 'TemporaryUnemployed',

          label: 'Врем. не работает'
        },
        {
          name: 'socialStatus',
          inputId: 'Retired',
          value: 'Retired',

          label: 'Пенсионер'
        },
        {
          name: 'socialStatus',
          inputId: 'Serviceman',
          value: 'Serviceman',

          label: 'Военнослужащий'
        },
        {
          name: 'socialStatus',
          inputId: 'Convict',
          value: 'Convict',

          label: 'Осужденный'
        },
        {
          name: 'socialStatus',
          inputId: 'Homeless',
          value: 'Homeless',

          label: 'БОМЖ'
        },
        {
          name: 'socialStatus',
          inputId: 'Invalid',
          value: 'Invalid',

          label: 'Инвалид'
        },
        {
          name: 'socialStatus',
          inputId: 'Other',
          value: 'Other',

          label: 'Другое'
        }
      ]
    },
    {
      id: 'callReason',
      groupTitle: 'Повод к вызову:',
      radioButtons: [
        {
          name: 'callReason',
          inputId: 'Accident',
          value: 'Accident',

          label: 'Несчастный случай'
        },
        {
          name: 'callReason',
          inputId: 'AcuteSuddenIllness',
          value: 'AcuteSuddenIllness',

          label: 'Острое внезапное заболевание'
        },
        {
          name: 'callReason',
          inputId: 'AcuteChronicDisease',
          value: 'AcuteChronicDisease',

          label: 'Обострение хронич. заболевания'
        },
        {
          name: 'callReason',
          inputId: 'AcuteChronicDisease',
          value: 'AcuteChronicDisease',

          label: 'Обострение хронич. заболевания'
        },
        {
          name: 'callReason',
          inputId: 'PlannedTransportation',
          value: 'PlannedTransportation',

          label: 'Плановая перевозка'
        },
        {
          name: 'callReason',
          inputId: 'PregnancyPathology',
          value: 'PregnancyPathology',

          label: 'Патология беременности'
        },
        {
          name: 'callReason',
          inputId: 'UrgentTransportation',
          value: 'UrgentTransportation',

          label: 'Экстренная перевозка'
        },
        {
          name: 'callReason',
          inputId: 'Delivery',
          value: 'Delivery',

          label: 'Роды'
        },
        {
          name: 'callReason',
          inputId: 'Other',
          value: 'Other',

          label: 'Другое'
        }
      ]
    },
    {
      id: 'callType',
      groupTitle: 'Вызов:',
      radioButtons: [
        {
          name: 'callType',
          inputId: 'Initial',
          value: 'Initial',

          label: 'Первичный'
        },
        {
          name: 'callType',
          inputId: 'Repeated',
          value: 'Repeated',

          label: 'Повторный'
        },
        {
          name: 'callType',
          inputId: 'Bystander',
          value: 'Bystander',

          label: 'Попутный'
        },
        {
          name: 'callType',
          inputId: 'Cooperative',
          value: 'Cooperative',

          label: 'Совместный'
        },
        {
          name: 'callType',
          inputId: 'AnotherCrewCall',
          value: 'AnotherCrewCall',

          label: 'Вызов на себя другой бригады'
        }
      ]
    },
    {
      id: 'crew',
      groupTitle: 'Состав бригады:',
      radioButtons: [
        {
          name: 'crew',
          inputId: 'Doctor',
          value: 'Doctor',

          label: 'Врач'
        },
        {
          name: 'crew',
          inputId: 'Feldsher',
          value: 'Feldsher',

          label: 'Фельдшер'
        },
        {
          name: 'crew',
          inputId: 'Orderly',
          value: 'Orderly',

          label: 'Санитар'
        },
        {
          name: 'crew',
          inputId: 'Driver',
          value: 'Driver',

          label: 'Водитель'
        }
      ]
    },
    {
      id: 'callDestinationType',
      groupTitle: 'Место вызова:',
      radioButtons: [
        {
          name: 'callDestination',
          inputId: 'Apartment',
          value: 'Apartment',

          label: 'Квартира'
        },
        {
          name: 'callDestination',
          inputId: 'Street',
          value: 'Street',

          label: 'Улица'
        },
        {
          name: 'callDestination',
          inputId: 'WorkPlace',
          value: 'WorkPlace',

          label: 'Рабочее место'
        },
        {
          name: 'callDestination',
          inputId: 'PublicPlace',
          value: 'PublicPlace',

          label: 'Общественное место'
        },
        {
          name: 'callDestination',
          inputId: 'MedicalOrganization',
          value: 'MedicalOrganization',

          label: 'Мед. организация'
        },
        {
          name: 'callDestination',
          inputId: 'School',
          value: 'School',

          label: 'Школа'
        },
        {
          name: 'callDestination',
          inputId: 'PreSchoolFacility',
          value: 'PreSchoolFacility',

          label: 'Дошкольное учреждение'
        },
        {
          name: 'callDestination',
          inputId: 'Route',
          value: 'Route',

          label: 'Трасса'
        },
        {
          name: 'callDestination',
          inputId: 'Other',
          value: 'Other',

          label: 'Другое'
        }
      ]
    },
    {
      id: 'accidentReason',
      groupTitle: 'Причина несчастного случая:',
      radioButtons: [
        {
          name: 'accidentReason',
          inputId: 'Domestic',
          value: 'Domestic',

          label: 'Бытовая'
        },
        {
          name: 'accidentReason',
          inputId: 'Street',
          value: 'Street',

          label: 'Уличная'
        },
        {
          name: 'accidentReason',
          inputId: 'Criminal',
          value: 'Criminal',

          label: 'Криминальная'
        },
        {
          name: 'accidentReason',
          inputId: 'Production',
          value: 'Production',

          label: 'Производственная'
        },
        {
          name: 'accidentReason',
          inputId: 'Sport',
          value: 'Sport',

          label: 'Спортивная'
        },
        {
          name: 'accidentReason',
          inputId: 'Intoxication',
          value: 'Intoxication',

          label: 'Отравление'
        },
        {
          name: 'accidentReason',
          inputId: 'CarAccident',
          value: 'CarAccident',

          label: 'ДТП'
        },
        {
          name: 'accidentReason',
          inputId: 'Fire',
          value: 'Fire',

          label: 'Пожар'
        },
        {
          name: 'accidentReason',
          inputId: 'Suicide',
          value: 'Suicide',

          label: 'Суицид'
        },
        {
          name: 'accidentReason',
          inputId: 'Drowning',
          value: 'Drowning',

          label: 'Утопление'
        },
        {
          name: 'accidentReason',
          inputId: 'Unknown',
          value: 'Unknown',

          label: 'Неизвестно'
        },
        {
          name: 'accidentReason',
          inputId: 'Other',
          value: 'Other',

          label: 'Другое'
        }
      ]
    },
    {
      id: 'intoxication',
      groupTitle: 'Наличие клиники оьянения:',
      radioButtons: [
        {
          name: 'intoxication',
          inputId: 'False',
          value: 'False',

          label: 'Нет'
        },
        {
          name: 'intoxication',
          inputId: 'True',
          value: 'True',

          label: 'Да'
        }
      ]
    }
  ])
}

export const EMPTY_PATIENT_CURRENT_STATE_FORM: PatientCurrentStateFormData = {
  registration: 'City',
  socialStatus: 'Employed',
  callReason: 'Accident',
  callType: 'Initial',
  callSource: 'Station',
  crew: 'Doctor',
  callDestinationType: 'Apartment',
  accidentReason: 'Domestic',
  intoxication: 'False'
}
