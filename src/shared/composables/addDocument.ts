import { addDoc, collection, db } from '@/plugins/firebase'
import { DocumentData } from '../model'
import { ref } from 'vue'

const addDocument = <T>(_collection: string) => {
  const formData = ref<T>()
  const recordId = ref('')

  const addDocument = async (data: DocumentData) => {
    recordId.value = ''
    const collectionReference = collection(db, _collection)
    await addDoc(collectionReference, data)
      .then((record) => {
        recordId.value = record.id.toString()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { formData, addDocument, recordId }
}

export default addDocument
