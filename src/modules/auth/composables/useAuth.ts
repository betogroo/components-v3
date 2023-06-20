import { ref } from 'vue'
import {
  auth,
  createUserWithEmailAndPassword,
  FirebaseError,
} from '@/plugins/firebase'

const useAuth = () => {
  const email = ref('')
  const password = ref('')
  const error = ref<string | null>(null)
  const isPending = ref(false)

  const handleClick = () => {
    console.log(email.value, password.value)
  }

  const signup = async (email: string, password: string) => {
    error.value = null
    isPending.value = true
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (!res) {
        throw new FirebaseError('auth/default-error', 'Erro ao cadastrar')
      }
      error.value = null
      isPending.value = false
    } catch (err) {
      const e = err as FirebaseError
      console.log(e.code)
      error.value = e.message
      isPending.value = false
    }
  }
  return { email, password, handleClick, signup, error, isPending }
}

export default useAuth
