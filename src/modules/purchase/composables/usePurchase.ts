import { db, getDocs, collection, addDoc } from '@/plugins/firebase'
import { DocumentData } from '@/shared/model/'
import { ref } from 'vue'
import type { Purchase } from '../model'
const purchases = ref<Purchase[] | null>([])

const collectionReference = collection(db, 'buy')
getDocs(collectionReference).then((snapshot) => {
  const docs: Purchase[] = []
  snapshot.docs.forEach((doc: DocumentData) => {
    docs.push({ ...doc.data(), id: doc.id })
  })
  purchases.value = docs
})

const addPurchase = async (purchase: Purchase) => {
  const collectionReference = collection(db, 'buy')
  await addDoc(collectionReference, purchase)
  console.log(purchase)
}

const useBuy = () => {
  return { purchases, addPurchase }
}

export default useBuy
