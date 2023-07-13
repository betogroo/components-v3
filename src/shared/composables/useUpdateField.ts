import { db, doc, getDoc, updateDoc } from '@/plugins/firebase'
import { ref } from 'vue'

const delay = (amount = 2000, msg = false): Promise<void> => {
  if (msg) {
    console.log(`Delay de ${amount / 1000} segundos para testes!`)
  }
  return new Promise((resolve) => setTimeout(resolve, amount))
}

const formValue = ref('')
const error = ref('')
const isLoading = ref(false)
const useUpdateField = <T>(collection: string, field: string) => {
  const updateField = async (value: T, id: string) => {
    const documentReference = doc(db, collection, id)
    await updateDoc(documentReference, { [field]: value })
  }

  const updateArray = async (value: T, id: string) => {
    isLoading.value = true
    await delay(3000, true)
    const documentReference = doc(db, collection, id)
    const documentSnapshot = await getDoc(documentReference)
    let newData: T[] = []
    if (documentSnapshot.exists()) {
      const existingData: T[] = documentSnapshot.data()[field]

      if (existingData) {
        newData = [...existingData, value]
      } else {
        newData = [value]
      }
      await updateDoc(documentReference, { [field]: newData })
        .then(() => {
          isLoading.value = false
        })
        .catch((err) => {
          error.value = err
          isLoading.value = false
        })
    } else {
      error.value = 'Algo deu errado'
    }
  }
  return { updateField, updateArray, formValue, error, isLoading }
}

export default useUpdateField
