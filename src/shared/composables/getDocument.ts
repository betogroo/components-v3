import { ref } from 'vue'
import { FirebaseError, db, doc, onSnapshot } from '@/plugins/firebase'
import type { DocumentData } from '@/shared/model'

const getDocument = async <T>(collection: string, id: string) => {
  const document = ref<T>()
  const error = ref<FirebaseError>()
  const isLoading = ref(true)
  const documentReference = doc(db, collection, id)

  onSnapshot(documentReference, (doc: DocumentData) => {
    //isLoading.value = true
    try {
      if (doc.exists()) {
        document.value = { ...doc.data(), id: doc.id }
        isLoading.value = false
      } else {
        isLoading.value = false
        throw new FirebaseError('1', 'Dado não encontrado')
      }
    } catch (err) {
      isLoading.value = false
      const e = err as FirebaseError
      error.value = e
    }
  })

  return { document, error, isLoading }
}

export default getDocument
