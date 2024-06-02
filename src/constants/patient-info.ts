import type { PatientInfoFormData } from '@/types/patient-info'

export const FORM_CAPTIONS = {
  FORM_HEADER: 'Сведения о больном',
  SURNAME: 'Фамилия',
  NAME: 'Имя',
  PATRONYMIC: 'Отчество',
  AGE: 'Возвраст',
  GENDER: 'Пол',
  JOB: 'Место работы',
  ID_DOCUMENT: 'Документ, удостоверяющий личность'
}

export const EMPTY_PATIENT_INFO_FORM: PatientInfoFormData = {
  surname: '',
  name: '',
  patronymic: '',
  age: '',
  gender: 'Male',
  job: '',
  identityDocument: ''
}
