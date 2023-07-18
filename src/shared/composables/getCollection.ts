import { ref } from 'vue'
import {
  db,
  collection,
  onSnapshot,
  orderBy,
  query,
  FirebaseError,
} from '@/plugins/firebase'
import type { DocumentData, Query } from '@/shared/model'
import { where } from 'firebase/firestore'
interface PurchaseError {
  code: string
  message: string
}

const getCollection = <T>(
  _collection: string,
  order?: string,
  filterField?: string,
  filterValue?: string,
) => {
  const documents = ref<T[]>()
  const isLoading = ref(false)
  const error = ref<PurchaseError | false>(false)

  const collectionReference = collection(db, _collection)
  let q: Query = query(collectionReference)
  if (order) {
    q = query(collectionReference, orderBy(order))
  }

  if (filterField && filterValue) {
    q = query(q, where(filterField, '==', filterValue))
  }

  onSnapshot(q, async (snapshot) => {
    isLoading.value = true
    error.value = false
    const results: T[] = []
    try {
      snapshot.docs.forEach((doc: DocumentData) => {
        results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      if (!documents.value.length)
        throw new FirebaseError('0000', 'Ainda não há dados gravados')
      isLoading.value = false
    } catch (err) {
      const e = err as FirebaseError
      error.value = e
      isLoading.value = false
      console.log(e.message)
    }
  })

  return { documents, isLoading, error }
}

export default getCollection
