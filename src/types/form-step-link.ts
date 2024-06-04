import type { FormStepName } from './form'

export type FormStep = {
  id: FormStepName
  index?: number
  description: string
  to: string
  isCompleted?: boolean
  nextStepId?: FormStepName | null
}
