import type { FormData } from '@/types/form'
import { EMPTY_ADRESS_FORM } from './adress-form'
import { EMPTY_PATIENT_INFO_FORM } from './patient-info'
import { EMPTY_ISSUER_FORM } from './issuer'

export const DEFAULT_FORM_DATA: FormData = {
  adress: {
    data: { ...EMPTY_ADRESS_FORM }
  },
  patientInfo: {
    data: { ...EMPTY_PATIENT_INFO_FORM }
  },
  issuer: {
    data: { ...EMPTY_ISSUER_FORM }
  },
  patientCurrentState: {
    data: {}
  },
  anamnesis: {
    data: {}
  }
}
