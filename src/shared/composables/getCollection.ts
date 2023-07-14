import { ref, watchEffect } from 'vue'
import { db, collection, onSnapshot, orderBy, query } from '@/plugins/firebase'
import type { DocumentData, Query } from '@/shared/model'
import { where } from 'firebase/firestore'

const getCollection = async <T>(
  _collection: string,
  order?: string,
  filterField?: string,
  filterValue?: string,
) => {
  const documents = ref<T[]>()

  const collectionReference = collection(db, _collection)
  let q: Query = query(collectionReference)
  if (order) {
    q = query(collectionReference, orderBy(order))
  }

  if (filterField && filterValue) {
    q = query(q, where(filterField, '==', filterValue))
  }

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
