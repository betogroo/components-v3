import { Timestamp } from '@/shared/model'

export interface Purchase {
  id?: string
  innerProcess: number
  outerProcess?: string
  type: string
  description: string
  date: Timestamp
}
