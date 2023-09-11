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
type PURCHASE_ITEM_DB = Database['public']['Tables']['purchase_item']
type PURCHASE_TYPE_DB = Database['public']['Tables']['purchase_type']

type Purchase = PURCHASE_DB['Row']
type PurchaseInsert = PURCHASE_DB['Insert']

type PurchaseType = PURCHASE_TYPE_DB['Row']

type PurchaseItem = PURCHASE_ITEM_DB['Row']
type PurchaseItemInsert = PURCHASE_ITEM_DB['Insert']

interface PurchaseWithItems extends Omit<Purchase, 'purchaseTypeId'> {
  items: PurchaseItem[]
}

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
