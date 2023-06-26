import { ref } from 'vue'
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FirebaseError,
} from '@/plugins/firebase'

const useAuth = () => {
  const email = ref('')
  const password = ref('')
  const error = ref<string | null>(null)
  const isPending = ref(false)

  const login = async () => {
    error.value = null
    isPending.value = true
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value,
      )
      if (!res) {
        throw new FirebaseError('auth/default-error', 'Erro ao entrar')
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
  return { email, password, login, signup, error, isPending }
}

export default useAuth
