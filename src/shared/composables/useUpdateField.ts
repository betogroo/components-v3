import { db, doc, getDoc, updateDoc } from '@/plugins/firebase'
import { ref } from 'vue'

const formValue = ref('')
const useUpdateField = (collection: string, field: string) => {
  const updateField = async (value: string, id: string) => {
    const documentReference = doc(db, collection, id)
    await updateDoc(documentReference, { [field]: value })
  }
  const updateMap = async <T>(value: T, id: string) => {
    const documentReference = doc(db, collection, id)
    const documentSnapshot = await getDoc(documentReference)
    let newBudget: T[] = []
    if (documentSnapshot.exists()) {
      const existingMap: T[] = documentSnapshot.data().budget

      if (existingMap) {
        console.log('tem budiget')
        newBudget = [...existingMap, value]
        await updateDoc(documentReference, { budget: newBudget })
      } else {
        console.log('nao tem budiget')
        newBudget = [value]
        await updateDoc(documentReference, { budget: newBudget })
      }
    } else {
      console.log('aqui se nao existe')
    }
  }
  return { updateField, updateMap, formValue }
}

export default useUpdateField
