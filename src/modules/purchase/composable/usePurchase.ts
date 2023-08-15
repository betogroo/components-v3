// vue
import { ref } from 'vue'
// composables
import { useDate } from '@/shared/composables'
import { supabase } from '@/plugins/supabase'

//types
import type { Purchase } from '../model/'

const { timestampToDate, timestampToYear } = useDate()
const purchases = ref<Purchase[]>([])
const purchase = ref<Purchase | null>()
const isLoading = ref(false)
const error = ref()
const purchaseCount = ref<number | null>(0)

const usePurchase = () => {
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
    purchases,
    purchase,
    purchaseCount,
    error,
    isLoading,
  }
}

export default usePurchase
