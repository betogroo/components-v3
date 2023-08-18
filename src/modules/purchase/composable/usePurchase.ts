// vue
import { ref } from 'vue'
// composables

import { supabase } from '@/plugins/supabase'

//types
import type { PurchaseInsert, Purchase } from '../model/'

const purchases = ref<Purchase[]>([])
const purchase = ref<Purchase | null>()
const purchaseCount = ref<number | null>(0)

const isLoading = ref(false)
const error = ref()

const usePurchase = () => {
  const addData = async (formData: PurchaseInsert) => {
    isLoading.value = true
    try {
      const { error: err, data } = await supabase
        .from('purchase')
        .insert({
          ...formData,
        })
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
  const getPurchase = async (id: string) => {
    error.value = null
    isLoading.value = true
    try {
      const { error: err, data } = await supabase
        .from('purchase')
        .select('*')
        .eq('id', id)
        .single()
      if (!data) {
        console.log(err.message)
        isLoading.value = false
        throw new Error('Não foi encontrada a compra especificada')
      }
      isLoading.value = false
      purchase.value = data
    } catch (err) {
      isLoading.value = false
      error.value = err
    }
  }
  const getPurchases = async () => {
    error.value = null
    isLoading.value = true
    try {
      const {
        data,
        error: err,
        count,
      } = await supabase.from('purchase').select('*').order('innerProcess')
      if (data) {
        isLoading.value = false
        purchases.value = data
        purchaseCount.value = count
      } else {
        isLoading.value = false
        error.value = err
      }
    } catch (err) {
      isLoading.value = false
      error.value = err
    }
  }

  return {
    getPurchases,
    getPurchase,
    addData,
    purchases,
    purchase,
    purchaseCount,
    error,
    isLoading,
  }
}

export default usePurchase
