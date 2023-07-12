import { db, doc, updateDoc } from '@/plugins/firebase'
import { ref } from 'vue'

const formValue = ref('')
const useUpdateField = (collection: string, id: string, field: string) => {
  const updateField = async (value: string) => {
    const documentReference = doc(db, collection, id)
    await updateDoc(documentReference, { [field]: value })
  }
  const updateMap = async <T>(value: T) => {
    const documentReference = doc(db, collection, id)
    await updateDoc(documentReference, { [field]: value })
  }
  return { updateField, updateMap, formValue }
}

export default useUpdateField
