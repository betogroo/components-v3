const timestampToDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

const useDate = () => {
  return { timestampToDate }
}

export default useDate
