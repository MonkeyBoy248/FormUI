import type { FormData } from '@/types/form'
import { EMPTY_ADRESS_FORM } from './adress-form'
import { EMPTY_PATIENT_INFO_FORM } from './patient-info'
import { EMPTY_ISSUER_FORM } from './issuer'
import { EMPTY_PATIENT_CURRENT_STATE_FORM } from './patient-current-state'
import { EMPTY_ANAMNESIS_FORM } from './anamnesis'

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
    data: { ...EMPTY_PATIENT_CURRENT_STATE_FORM }
  },
  anamnesis: {
    data: { ...EMPTY_ANAMNESIS_FORM }
  }
}
