import { ref } from 'vue'
import { supabase } from '@/plugins/supabase'

// types
import type { PurchaseItemInsert, PurchaseItem } from '../model/'

const usePurchaseItem = () => {
  const isLoading = ref(false)
  const error = ref(null)
  const purchaseItems = ref<PurchaseItem[] | null>()
  const itemsCount = ref<number | null>(0)

  const getPurchaseItems = async (id: string) => {
    error.value = null
    isLoading.value = true
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
      isLoading.value = false
      itemsCount.value = count
      purchaseItems.value = data
    } catch (err) {
      isLoading.value = false
      console.log(err)
    }
  }
  const addData = async (newData: PurchaseItemInsert) => {
    console.log('Vai add um ou mais item, começando com 1', newData)
    isLoading.value = true
    try {
      const { error: err, data } = await supabase
        .from('purchase_item')
        .insert({ ...newData })
        .select()
        .single()
      if (err) {
        isLoading.value = false
        throw new Error(err.message)
      }
      isLoading.value = false
      return data
    } catch (err) {
      isLoading.value = false
      console.log(err)
    }
  }

  return {
    isLoading,
    error,
    getPurchaseItems,
    addData,
    itemsCount,
    purchaseItems,
  }
}

export default usePurchaseItem
