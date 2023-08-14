import { Timestamp } from '@/shared/model'

const timestampToYear = (date: Timestamp) => {
  const seconds = date.seconds * 1000
  return new Date(seconds).getFullYear()
}

const timestampToDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

const useDate = () => {
  return { timestampToYear, timestampToDate }
}

export default useDate
