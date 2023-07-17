import { ref } from 'vue'
import { db, collection, onSnapshot, orderBy, query } from '@/plugins/firebase'
import type { DocumentData, Query } from '@/shared/model'
import { where } from 'firebase/firestore'

const getCollection = <T>(
  _collection: string,
  order?: string,
  filterField?: string,
  filterValue?: string,
) => {
  const documents = ref<T[]>()
  const isLoading = ref(false)

  const collectionReference = collection(db, _collection)
  let q: Query = query(collectionReference)
  if (order) {
    q = query(collectionReference, orderBy(order))
  }

  if (filterField && filterValue) {
    q = query(q, where(filterField, '==', filterValue))
  }

  onSnapshot(
    q,
    async (snapshot) => {
      isLoading.value = true
      const results: T[] = []
      snapshot.docs.forEach((doc: DocumentData) => {
        results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      isLoading.value = false
    },
    (error) => {
      console.log(error.cause)
    },
  )

  return { documents, isLoading }
}

export default getCollection
