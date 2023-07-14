import { ref } from 'vue'
import { db, collection, onSnapshot, orderBy, query } from '@/plugins/firebase'
import type { DocumentData, Query } from '@/shared/model'
import { where } from 'firebase/firestore'

// temp
const delay = (amount = 2000, msg = false): Promise<void> => {
  if (msg) {
    console.log(`Delay de ${amount / 1000} segundos para testes!`)
  }
  return new Promise((resolve) => setTimeout(resolve, amount))
}

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
      await delay(2000, true)
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
