//import { Timestamp } from '@/shared/model'
import type { Database } from '@/shared/model'

/* export interface Purchase {
  id?: string
  innerProcess: number
  outerProcess?: string
  description: string
  createdAt: Date
  purchaseTypeId: PurchaseType.id
} */

type PURCHASE_DB = Database['public']['Tables']['purchase']
type Purchase = PURCHASE_DB['Row']
type PurchaseInsert = PURCHASE_DB['Insert']
type PurchaseType = Database['public']['Tables']['purchase_type']['Row']
type PurchaseItem = Database['public']['Tables']['purchase_item']['Row']

/* export interface PurchaseType {
  id: string
  title: string
} */
/* export interface PurchaseItem {
  id?: string
  tittle: string
  siafisico: string
  expenseQuality: string
  unity: string
  quantity: number
  price: number
  createdAt: Timestamp
  budgets?: Budget[]
} */

export interface Budget {
  link?: string
  print?: string
  price?: number
}
