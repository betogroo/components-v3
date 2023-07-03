import { db, getDocs, collection, addDoc } from '@/plugins/firebase'
import { ref } from 'vue'
import type { Purchase } from '../model'
const purchases = ref<Purchase[] | null>([])

const collectionReference = collection(db, 'buy')
getDocs(collectionReference).then((snapshot) => {
  const docs: any[] = []
  snapshot.docs.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })
    //console.log(doc.data().innerProcess)
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
