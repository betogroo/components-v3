import useDate from '@/shared/composables/useDate'
import type { Purchase } from '../model/'
import { Timestamp } from 'firebase/firestore'
const { timestampToDate, timestampToYear } = useDate()
const usePurchase = () => {
  const innerProcessFormatName = (purchase: Purchase, prefix = 'DSP SJB') => {
    const innerProcess = purchase.innerProcess.toString().padStart(3, '0')
    const year = timestampToYear(purchase.createdAt)
    return `Processo: ${prefix}/${innerProcess}/${year}`
  }

  const dateFormat = (date: Timestamp) => {
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
  return { innerProcessFormatName, dateFormat, itemsCount }
}

export default usePurchase
