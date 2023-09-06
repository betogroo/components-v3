// vue
import { ref } from 'vue'
// composables

import { supabase } from '@/plugins/supabase'

//types
import type { PurchaseInsert, Purchase } from '../model/'

const purchases = ref<Purchase[]>([])
const purchase = ref<Purchase | null>()
const purchaseCount = ref<number | null>(0)

const isPending = ref(false)
const error = ref()

const delay = (amount = 2000, msg = false): Promise<void> => {
  if (msg) {
    console.log(`Delay de ${amount / 1000} segundos para testes!`)
  }
  return new Promise((resolve) => setTimeout(resolve, amount))
}

const usePurchase = () => {
  const addData = async (formData: PurchaseInsert) => {
    try {
      isPending.value = true
      error.value = false
      await delay()
      const { error: err, data } = await supabase
        .from('purchase')
        .insert({
          ...formData,
        })
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
  const getPurchase = async (id: string) => {
    error.value = null
    isPending.value = true
    try {
      const { error: err, data } = await supabase
        .from('purchase')
        .select('*')
        .eq('id', id)
        .single()
      if (!data) {
        console.log(err.message)
        isPending.value = false
        throw new Error('Não foi encontrada a compra especificada')
      }
      isPending.value = false
      purchase.value = data
    } catch (err) {
      const e = err as Error
      error.value = e.message
      isPending.value = false
    } finally {
      isPending.value = false
    }
  }
  const getPurchases = async () => {
    error.value = null
    isPending.value = true
    try {
      const {
        data,
        error: err,
        count,
      } = await supabase
        .from('purchase')
        .select('*', { count: 'exact', head: false })
        .order('innerProcess')
      if (data) {
        isPending.value = false
        purchases.value = data
        purchaseCount.value = count
      } else {
        isPending.value = false
        error.value = err
      }
    } catch (err) {
      const e = err as Error
      error.value = e.message
      console.log(e.message)
    } finally {
      isPending.value = false
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
    isPending,
  }
}

export default usePurchase
