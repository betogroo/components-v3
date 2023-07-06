import { ref, watchEffect } from 'vue'
import { DocumentData, db, doc, onSnapshot } from '@/plugins/firebase'
//import { Purchase } from '@/modules/purchase/model'
// import { DocumentData } from 'firebase/firestore'

const getDocument = async <T>(_document: string, id: string) => {
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
      document.value = doc.data()
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
