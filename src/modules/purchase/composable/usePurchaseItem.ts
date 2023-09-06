import { ref } from 'vue'
import { supabase } from '@/plugins/supabase'

// types
import type { PurchaseItemInsert, PurchaseItem } from '../model/'

const usePurchaseItem = () => {
  const isPending = ref(false)
  const error = ref(null)
  const purchaseItems = ref<PurchaseItem[] | null>()
  const itemsCount = ref<number | null>(0)

  const getPurchaseItems = async (id: string) => {
    error.value = null
    isPending.value = true
    try {
      const {
        error: err,
        data,
        count,
      } = await supabase
        .from('purchase_item')
        .select('*', { count: 'estimated' })
        .eq('purchase_id', id)
      if (err) {
        throw new Error(err.message)
      }
      isPending.value = false
      itemsCount.value = count
      purchaseItems.value = data
    } catch (err) {
      isPending.value = false
      console.log(err)
    }
  }
  const addData = async (newData: PurchaseItemInsert) => {
    console.log('Vai add um ou mais item, começando com 1', newData)
    isPending.value = true
    try {
      const { error: err, data } = await supabase
        .from('purchase_item')
        .insert({ ...newData })
        .select()
        .single()
      if (err) {
        isPending.value = false
        throw new Error(err.message)
      }
      isPending.value = false
      return data
    } catch (err) {
      isPending.value = false
      console.log(err)
    }
  }

  return {
    isPending,
    error,
    getPurchaseItems,
    addData,
    itemsCount,
    purchaseItems,
  }
}

export default usePurchaseItem
