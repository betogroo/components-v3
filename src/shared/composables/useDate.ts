import type { Timestamp } from '@/shared/model'

const timestampToYear = (date: Timestamp) => {
  const seconds = date.seconds * 1000
  return new Date(seconds).getFullYear()
}

const timestampToDate = (date: Timestamp) => {
  const seconds = date.seconds * 1000
  return new Date(seconds).toLocaleDateString('pt-BR')
}

const useDate = () => {
  return { timestampToYear, timestampToDate }
}

export default useDate
