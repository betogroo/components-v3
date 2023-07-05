import { ref } from 'vue'
import { db, collection, DocumentData, getDocs } from '@/plugins/firebase'
// import { DocumentData } from 'firebase/firestore'

const getCollection = async <T>(_collection: string) => {
  const documents = ref<T[]>()

  const collectionReference = collection(db, _collection)

  /* const unsub = onSnapshot(collectionReference, (snapshot) => {
    const results: T[] = []
    snapshot.docs.forEach((doc: DocumentData) => {
      results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
  }) */

  await getDocs(collectionReference).then((snapshot) => {
    const docs: T[] = []
    snapshot.docs.forEach((doc: DocumentData) => {
      docs.push({ ...doc.data(), id: doc.id })
    })
    documents.value = docs
  })

  /* watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  }) */
  return { documents }
}

export default getCollection
