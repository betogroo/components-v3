import { ref, watchEffect } from 'vue'
import { db, collection, onSnapshot } from '@/plugins/firebase'

const getColletction = (_collection: string) => {
  const documents = ref()

  const collectionReference = collection(db, _collection)

  const unsub = onSnapshot(collectionReference, (snapshot) => {
    const results: any[] | null = []
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })
  return { documents }
}

export default getColletction
