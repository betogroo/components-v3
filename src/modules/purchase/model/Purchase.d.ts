import { Timestamp } from '@/shared/model'

export interface Purchase {
  id?: string
  innerProcess: number
  outerProcess?: string
  type: string
  description: string
  createdAt: Timestamp
}
export interface ItemPurchase {
  id?: string
  purchase_id: string
  tittle: string
  siafisico: string
  expenseQuality: string
  unity: string
  quantity: number
  price: number
  budget?: Budget[]
}

export interface Budget {
  link?: string
  print?: string
  price?: number
}
