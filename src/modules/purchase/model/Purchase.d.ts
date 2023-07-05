import { Timestamp } from 'firebase/firestore'

export interface Purchase {
  id: string
  innerProcess: number
  type: string
  description: string
  date: Timestamp
}
