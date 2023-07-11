import { ref, watchEffect } from 'vue'
import { db, collection, onSnapshot, orderBy, query } from '@/plugins/firebase'
import type { DocumentData } from '@/shared/model'
import { FieldPath } from 'firebase/firestore'

const getCollection = async <T>(_collection: string, order = 'date') => {
  const documents = ref<T[]>()

  const collectionReference = collection(db, _collection)
  const q = query(collectionReference, orderBy(order ? order : 'innerProcess'))

  const unsub = onSnapshot(q, (snapshot) => {
    const results: T[] = []
    snapshot.docs.forEach((doc: DocumentData) => {
      results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
  })

  /* await getDocs(q).then((snapshot) => {
    const docs: T[] = []
    snapshot.docs.forEach((doc: DocumentData) => {
      docs.push({ ...doc.data(), id: doc.id })
    })
    documents.value = docs
  }) */

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })
  return { documents }
}

export default getCollection
