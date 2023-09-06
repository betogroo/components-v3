import { ref } from 'vue'
import { supabase } from '@/plugins/supabase'

// types
import type { PurchaseItemInsert, PurchaseItem } from '../model/'

const usePurchaseItem = () => {
  const isPending = ref()
  const error = ref()
  const purchaseItems = ref<PurchaseItem[] | null>()
  const itemsCount = ref<number | null>(0)

  const delay = (amount = 2000, msg = false): Promise<void> => {
    if (msg) {
      console.log(`Delay de ${amount / 1000} segundos para testes!`)
    }
    return new Promise((resolve) => setTimeout(resolve, amount))
  }
  const getPurchaseItems = async (id: string) => {
    isPending.value = true
    try {
      error.value = null
      await delay()
      const {
        error: err,
        data,
        count,
      } = await supabase
        .from('purchase_item')
        .select('*', { count: 'estimated' })
        .eq('purchase_id', id)
      if (err) throw err
      itemsCount.value = count
      purchaseItems.value = data
    } catch (err) {
      const e = err as Error
      error.value = e.message
    } finally {
      isPending.value = false
    }
  }
  const addData = async (newData: PurchaseItemInsert) => {
    console.log('Vai add um ou mais item, começando com 1', newData)
    try {
      isPending.value = true
      error.value = null
      await delay()
      const { error: err, data } = await supabase
        .from('purchase_item')
        .insert({ ...newData })
        .select()
        .single()
      if (err) throw err
      return data
    } catch (err) {
      const e = err as Error
      error.value = e.message
    } finally {
      isPending.value = false
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
