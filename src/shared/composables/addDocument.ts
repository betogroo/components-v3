import { addDoc, collection, db } from '@/plugins/firebase'
import { DocumentData } from '../model'
import { ref } from 'vue'

const addDocument = <T>(_collection: string, data: DocumentData) => {
  const formData = ref<T>()

  const addDocument = async () => {
    const collectionReference = collection(db, _collection)
    await addDoc(collectionReference, data)
    console.log(data)
  }

  return { formData, addDocument }
}

export default addDocument
