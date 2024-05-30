import type { AdressFormData } from '@/types/adress-form'

export const FORM_CAPTIONS = {
  FORM_HEADER: 'Адрес вызова',
  CITY: 'Город',
  LOCALITY: 'Населенный пункт',
  DISTRICT: 'Район',
  STREET: 'Улица',
  BUILDING: 'Дом',
  CASE: 'Корпус',
  APARTMENT: 'Квартира',
  ENTRANCE: 'Подъезд',
  ENTRANCE_CODE: 'Код подъезда',
  FLOOR: 'Этаж'
}

export const EMPTY_ADRESS_FORM: AdressFormData = {
  city: '',
  district: '',
  street: '',
  locality: '',
  building: '',
  case: '',
  apartment: '',
  entrance: '',
  entranceCode: '',
  floor: ''
}
