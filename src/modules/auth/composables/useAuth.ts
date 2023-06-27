import { ref } from 'vue'
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  FirebaseError,
  onAuthStateChanged,
} from '@/plugins/firebase'

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)
const isPending = ref(false)
const user = ref(auth.currentUser)

onAuthStateChanged(auth, (_user) => {
  console.log(`User state changed. Current user is ${JSON.stringify(_user)}`)
  user.value = _user
})

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
const useAuth = () => {
  return {
    auth,
    email,
    password,
    login,
    signup,
    signOut,
    error,
    isPending,
    user,
  }
}

export default useAuth
