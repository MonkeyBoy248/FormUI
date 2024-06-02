export type FormStepName = 'adress' | 'patientInfo' | 'issuer' | 'patientCurrentState' | 'anamnesis'
export type FormValue = {
    data: Record<string, any>
    isCompleted?: boolean
}
export type FormData = Record<FormStepName, FormValue>
