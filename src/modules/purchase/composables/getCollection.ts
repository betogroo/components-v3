import { ref, watchEffect } from 'vue'
import { db, collection, onSnapshot } from '@/plugins/firebase'
import { DocumentData } from 'firebase/firestore'

const getCollection = <T>(_collection: string) => {
  const documents = ref<T[]>()

  const collectionReference = collection(db, _collection)

  const unsub = onSnapshot(collectionReference, (snapshot) => {
    const results: T[] = []
    snapshot.docs.forEach((doc: DocumentData) => {
      results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })
  return { documents }
}

export default getCollection
