import { useDate } from '@/shared/composables'
const { timestampToDate } = useDate()
import type { Purchase } from '../model/'

const useUtils = () => {
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

  return { innerProcessFormatName, dateFormat, itemsCount }
}

export default useUtils
