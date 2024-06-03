import type { RadioButtonGroup } from '@/components/shared/CheckboxGroup.vue'
import { useFormStore } from '@/stores/form'
import type { PatientCurrentStateFormData } from '@/types/patient-current-state'
import { storeToRefs } from 'pinia'
import { computed, toRef } from 'vue'

export const buildPatientCurrentStateFormConfig = (): RadioButtonGroup[] => {
  const formStore = useFormStore()
  const { formData } = storeToRefs(formStore)

  const patientCurrentStateFormData = computed<PatientCurrentStateFormData>(() => {
    return formData.value.patientCurrentState.data as PatientCurrentStateFormData
  })

  return [
    {
      id: 'registration',
      groupTitle: 'Место регистрации больного:',
      radioButtons: [
        {
          name: 'registration',
          inputId: 'City',
          value: 'City',
          model: patientCurrentStateFormData.value.registration,
          label: 'Город'
        },
        {
          name: 'registration',
          inputId: 'Countryside',
          value: 'Countryside',
          model: patientCurrentStateFormData.value.registration,
          label: 'Сельская местность'
        },
        {
          name: 'registration',
          inputId: 'Stranger',
          value: 'Stranger',
          model: patientCurrentStateFormData.value.registration,
          label: 'Приезжий'
        },
        {
          name: 'registration',
          inputId: 'Other',
          value: 'Other',
          model: patientCurrentStateFormData.value.registration,
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
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Работающий'
        },
        {
          name: 'socialStatus',
          inputId: 'Preschooler',
          value: 'Preschooler',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Дошкольник'
        },
        {
          name: 'socialStatus',
          inputId: 'Student',
          value: 'Student',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Учащийся'
        },
        {
          name: 'socialStatus',
          inputId: 'Unemployed',
          value: 'Unemployed',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Безработный'
        },
        {
          name: 'socialStatus',
          inputId: 'Refugee',
          value: 'Refugee',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Беженец'
        },
        {
          name: 'socialStatus',
          inputId: 'TemporaryUnemployed',
          value: 'TemporaryUnemployed',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Врем. не работает'
        },
        {
          name: 'socialStatus',
          inputId: 'Retired',
          value: 'Retired',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Пенсионер'
        },
        {
          name: 'socialStatus',
          inputId: 'Serviceman',
          value: 'Serviceman',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Военнослужащий'
        },
        {
          name: 'socialStatus',
          inputId: 'Convict',
          value: 'Convict',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Осужденный'
        },
        {
          name: 'socialStatus',
          inputId: 'Homeless',
          value: 'Homeless',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'БОМЖ'
        },
        {
          name: 'socialStatus',
          inputId: 'Invalid',
          value: 'Invalid',
          model: patientCurrentStateFormData.value.socialStatus,
          label: 'Инвалид'
        },
        {
          name: 'socialStatus',
          inputId: 'Other',
          value: 'Other',
          model: patientCurrentStateFormData.value.socialStatus,
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
          model: patientCurrentStateFormData.value.callReason,
          label: 'Несчастный случай'
        },
        {
          name: 'callReason',
          inputId: 'AcuteSuddenIllness',
          value: 'AcuteSuddenIllness',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Острое внезапное заболевание'
        },
        {
          name: 'callReason',
          inputId: 'AcuteChronicDisease',
          value: 'AcuteChronicDisease',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Обострение хронич. заболевания'
        },
        {
          name: 'callReason',
          inputId: 'AcuteChronicDisease',
          value: 'AcuteChronicDisease',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Обострение хронич. заболевания'
        },
        {
          name: 'callReason',
          inputId: 'PlannedTransportation',
          value: 'PlannedTransportation',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Плановая перевозка'
        },
        {
          name: 'callReason',
          inputId: 'PregnancyPathology',
          value: 'PregnancyPathology',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Патология беременности'
        },
        {
          name: 'callReason',
          inputId: 'UrgentTransportation',
          value: 'UrgentTransportation',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Экстренная перевозка'
        },
        {
          name: 'callReason',
          inputId: 'Delivery',
          value: 'Delivery',
          model: patientCurrentStateFormData.value.callReason,
          label: 'Роды'
        },
        {
          name: 'callReason',
          inputId: 'Other',
          value: 'Other',
          model: patientCurrentStateFormData.value.callReason,
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
          model: patientCurrentStateFormData.value.callType,
          label: 'Первичный'
        },
        {
          name: 'callType',
          inputId: 'Repeated',
          value: 'Repeated',
          model: patientCurrentStateFormData.value.callType,
          label: 'Повторный'
        },
        {
          name: 'callType',
          inputId: 'Bystander',
          value: 'Bystander',
          model: patientCurrentStateFormData.value.callType,
          label: 'Попутный'
        },
        {
          name: 'callType',
          inputId: 'Cooperative',
          value: 'Cooperative',
          model: patientCurrentStateFormData.value.callType,
          label: 'Совместный'
        },
        {
          name: 'callType',
          inputId: 'AnotherCrewCall',
          value: 'AnotherCrewCall',
          model: patientCurrentStateFormData.value.callType,
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
          model: patientCurrentStateFormData.value.crew,
          label: 'Врач'
        },
        {
          name: 'crew',
          inputId: 'Feldsher',
          value: 'Feldsher',
          model: patientCurrentStateFormData.value.crew,
          label: 'Фельдшер'
        },
        {
          name: 'crew',
          inputId: 'Orderly',
          value: 'Orderly',
          model: patientCurrentStateFormData.value.crew,
          label: 'Санитар'
        },
        {
          name: 'crew',
          inputId: 'Driver',
          value: 'Driver',
          model: patientCurrentStateFormData.value.crew,
          label: 'Водитель'
        }
      ]
    },
    {
      id: 'callDestination',
      groupTitle: 'Место вызова:',
      radioButtons: [
        {
          name: 'callDestination',
          inputId: 'Apartment',
          value: 'Apartment',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Квартира'
        },
        {
          name: 'callDestination',
          inputId: 'Street',
          value: 'Street',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Улица'
        },
        {
          name: 'callDestination',
          inputId: 'WorkPlace',
          value: 'WorkPlace',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Рабочее место'
        },
        {
          name: 'callDestination',
          inputId: 'PublicPlace',
          value: 'PublicPlace',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Общественное место'
        },
        {
          name: 'callDestination',
          inputId: 'MedicalOrganization',
          value: 'MedicalOrganization',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Мед. организация'
        },
        {
          name: 'callDestination',
          inputId: 'School',
          value: 'School',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Школа'
        },
        {
          name: 'callDestination',
          inputId: 'PreSchoolFacility',
          value: 'PreSchoolFacility',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Дошкольное учреждение'
        },
        {
          name: 'callDestination',
          inputId: 'Route',
          value: 'Route',
          model: patientCurrentStateFormData.value.callDestinationType,
          label: 'Трасса'
        },
        {
          name: 'callDestination',
          inputId: 'Other',
          value: 'Other',
          model: patientCurrentStateFormData.value.callDestinationType,
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
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Бытовая'
        },
        {
          name: 'accidentReason',
          inputId: 'Street',
          value: 'Street',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Уличная'
        },
        {
          name: 'accidentReason',
          inputId: 'Criminal',
          value: 'Criminal',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Криминальная'
        },
        {
          name: 'accidentReason',
          inputId: 'Production',
          value: 'Production',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Производственная'
        },
        {
          name: 'accidentReason',
          inputId: 'Sport',
          value: 'Sport',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Спортивная'
        },
        {
          name: 'accidentReason',
          inputId: 'Intoxication',
          value: 'Intoxication',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Отравление'
        },
        {
          name: 'accidentReason',
          inputId: 'CarAccident',
          value: 'CarAccident',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'ДТП'
        },
        {
          name: 'accidentReason',
          inputId: 'Fire',
          value: 'Fire',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Пожар'
        },
        {
          name: 'accidentReason',
          inputId: 'Suicide',
          value: 'Suicide',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Суицид'
        },
        {
          name: 'accidentReason',
          inputId: 'Drowning',
          value: 'Drowning',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Утопление'
        },
        {
          name: 'accidentReason',
          inputId: 'Unknown',
          value: 'Unknown',
          model: patientCurrentStateFormData.value.accidentReason,
          label: 'Неизвестно'
        },
        {
          name: 'accidentReason',
          inputId: 'Other',
          value: 'Other',
          model: patientCurrentStateFormData.value.accidentReason,
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
          model: patientCurrentStateFormData.value.intoxication,
          label: 'Нет'
        },
        {
          name: 'intoxication',
          inputId: 'True',
          value: 'True',
          model: patientCurrentStateFormData.value.intoxication,
          label: 'Да'
        }
      ]
    }
  ]
}

export const EMPTY_PATIENT_CURRENT_STATE_FORM: PatientCurrentStateFormData = {
  registration: 'City',
  socialStatus: 'Employed',
  callReason: 'Accident',
  callType: 'Initial',
  callSource: 'Station',
  crew: 'Doctor',
  callDestinationType: 'Appartment',
  accidentReason: 'Domestic',
  intoxication: 'False'
}
