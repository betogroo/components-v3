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
  return { innerProcessFormatName, dateFormat }
}

export default usePurchase
