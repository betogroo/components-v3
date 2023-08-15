// vue
import { ref } from 'vue'
// composables
import { useDate } from '@/shared/composables'
import { supabase } from '@/plugins/supabase'

//types
import type { PurchaseInsert, Purchase } from '../model/'

const { timestampToDate } = useDate()
const purchases = ref<Purchase[]>([])
const purchase = ref<Purchase | null>()
const isLoading = ref(false)
const error = ref()
const purchaseCount = ref<number | null>(0)

const usePurchase = () => {
  const addPurchase = async (formData: PurchaseInsert) => {
    isLoading.value = true
    const dados = formData
    delete dados.createdAt
    delete dados.id
    //const { description, innerProcess, outerProcess, purchaseTypeId } = data
    try {
      const { error: err, data } = await supabase
        .from('purchase')
        .insert({
          ...dados,
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
        isLoading.value = false
        console.log(err)
        throw new Error('Sem dados cadastrados')
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

  const innerProcessFormatName = (purchase: Purchase, prefix = 'DSP SJB') => {
    const innerProcess = purchase.innerProcess?.toString().padStart(3, '0')
    //const year = timestampToYear(purchase.createdAt)
    const year = new Date(purchase.createdAt).getFullYear()
    return `Processo: ${prefix}/${innerProcess}/${year}`
  }

  const dateFormat = (date: string) => {
    return timestampToDate(date)
  }
  const itemsCount = (
    count: number,
    singularWord = 'produto',
    pluralWord = 'produtos',
  ): string => {
    let text: string
    switch (count) {
      case 0:
        text = `Não há ${pluralWord} cadastrados`
        break
      case 1:
        text = `Há 1 ${singularWord} cadastrado`
        break
      default:
        text = `Há ${count} ${pluralWord} cadastrados`
        break
    }
    return text
  }
  return {
    innerProcessFormatName,
    dateFormat,
    itemsCount,
    getPurchases,
    getPurchase,
    addPurchase,
    purchases,
    purchase,
    purchaseCount,
    error,
    isLoading,
  }
}

export default usePurchase
