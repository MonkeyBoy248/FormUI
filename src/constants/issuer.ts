import type { IssuerFormData } from '@/types/issuer'

export const FORM_CAPTIONS = {
  FORM_HEADER: 'Кто вызвал?',
  SURNAME: 'Фамилия',
  NAME: 'Имя',
  PATRONYMIC: 'Отчество',
  RELATIONSHIP: 'Кем является',
  PHONE_NUMBER: 'Номер телефона',
  COMMENT: 'Комментарий',
}

export const EMPTY_ISSUER_FORM: IssuerFormData = {
  surname: '',
  name: '',
  patronymic: '',
  relationship: '',
  phoneNumber: '',
  comment: ''
}
