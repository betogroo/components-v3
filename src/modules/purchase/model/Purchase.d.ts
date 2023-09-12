//import { Timestamp } from '@/shared/model'
import type { Database } from '@/shared/model'
import type { Profile } from '@/modules/profile/model'

type PURCHASE_DB = Database['public']['Tables']['purchase']
type PURCHASE_ITEM_DB = Database['public']['Tables']['purchase_item']
type PURCHASE_TYPE_DB = Database['public']['Tables']['purchase_type']

type Purchase = Omit<PURCHASE_DB['Row'], 'purchaseTypeId'>
type PurchaseOwner = Omit<Profile, 'id'>
type PurchaseInsert = PURCHASE_DB['Insert']

type PurchaseType = PURCHASE_TYPE_DB['Row']

type PurchaseItem = PURCHASE_ITEM_DB['Row']
type PurchaseItemInsert = PURCHASE_ITEM_DB['Insert']

interface PurchaseWithItems extends Purchase {
  purchaseItems?: PurchaseItem[]
  purchaseOwner?: PurchaseOwner | null
}

export interface Budget {
  link?: string
  print?: string
  price?: number
}
