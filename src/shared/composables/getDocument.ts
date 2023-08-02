import { ref, watchEffect } from 'vue'
import { db, doc, onSnapshot } from '@/plugins/firebase'
import type { DocumentData } from '@/shared/model'
//import { Purchase } from '@/modules/purchase/model'
// import { DocumentData } from 'firebase/firestore'

const getDocument = <T>(_document: string, id: string) => {
  const document = ref<T>()
  const error = ref(false)
  const isLoading = ref(false)
  const documentReference = doc(db, _document, id)

  /* await getDoc(documentReference).then((doc: DocumentData) => {
    if (doc.exists()) {
      document.value = doc.data()
    } else {
      error.value = true
      console.log('Erroroororor')
    }
  }) */

  const unsub = onSnapshot(documentReference, (doc: DocumentData) => {
    isLoading.value = true
    if (doc.exists()) {
      document.value = { ...doc.data(), id: doc.id }
      isLoading.value = false
    } else {
      error.value = true
      isLoading.value = false
      console.log('Erroroororor')
    }
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })
  return { document, error, isLoading }
}

export default getDocument
