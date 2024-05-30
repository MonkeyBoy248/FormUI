import type { AmbulanceFormData } from '@/types/ambulance-form'

export const FORM_CAPTIONS = {
  FORM_HEADER: 'Карта вызова скорой помощи',
  DOCTOR_PHONE_NUMBER: 'Номер фельдшера',
  STATION_NUMBER: 'Номер станции',
  CREW_NUMBER: 'Номер бригады',
  DATE_OF_CALL: 'Дата вызова',
  ARRIVAL_TIME: 'Время прибытия',
  END_OF_CALL_TIME: 'Время окончания вызова'
}

export const FORM_SELECTORS_DATA = {
  doctorPhoneNumbers: [
    '8-800-555-35-35',
    '8-913-693-31-31',
    '8-965-000-01-83',
    '8-800-554-34-34',
    '8-900-000-00-01'
  ],
  stationNumbers: ['1', '2', '3', '4', '5'],
  crewNumbers: ['1', '2', '3', '4', '5']
}

export const EMPTY_AMBULANCE_FORM: AmbulanceFormData = {
  doctorPhone: '',
  stationNumber: '',
  crewNumber: '',
  dateOfCall: new Date(),
  arriavalTime: new Date(),
  endOfCallTime: new Date()
}
