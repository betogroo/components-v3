import { ref } from 'vue'
import { db, doc, getDoc } from '@/plugins/firebase'

//types
import { DocumentData, FirebaseError } from '../model'
import { DocumentSnapshot } from 'firebase/firestore'

const getDocument = async (_collection: string, idCollection: string) => {
  const documentReference = doc(db, _collection, idCollection)
  const error = ref<FirebaseError>()
  const document = ref<any>()
  const isLoading = ref(false)

  try {
    isLoading.value = true
    const documentSnapshot: DocumentSnapshot<DocumentData> = await getDoc(
      documentReference,
    )
    if (!documentSnapshot.exists()) {
      isLoading.value = false
      throw new FirebaseError('1', 'Não encontrado')
    }
    document.value = documentSnapshot.data()
    isLoading.value = false
  } catch (err: unknown) {
    isLoading.value = false
    const e = err as FirebaseError
    error.value = e
  }

  return { document, error, isLoading }
}

export default getDocument
