import { ref } from 'vue'
import { supabase, AuthUser } from '@/plugins/supabase'
import { Credentials } from '../model'

const error = ref<Error | null | string>(null)
const user = ref<AuthUser | undefined | null>(null)
const isPending = ref(false)

const delay = (amount = 2000, msg = false): Promise<void> => {
  if (msg) {
    console.log(`Delay de ${amount / 1000} segundos para testes!`)
  }
  return new Promise((resolve) => setTimeout(resolve, amount))
}

const logout = async () => {
  try {
    error.value = null
    isPending.value = true
    await delay()
    const { error: err } = await supabase.auth.signOut()
    user.value = null
    if (err) throw err
  } catch (err) {
    const e = err as Error
    error.value = e.message
    console.log(e)
  } finally {
    isPending.value = false
  }
}

const login = async (credentials: Credentials) => {
  try {
    const { email, password } = credentials
    error.value = null
    isPending.value = true
    await delay()
    const { data, error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (err) throw err
    user.value = data.user
  } catch (err) {
    const e = err as Error
    error.value = e.message
  } finally {
    isPending.value = false
  }
}
const loginWithOtp = async (email: Credentials['email']) => {
  try {
    error.value = null
    isPending.value = true
    await delay()
    const { data, error: err } = await supabase.auth.signInWithOtp({ email })
    if (err) throw err
    user.value = data.user
  } catch (err) {
    const e = err as Error
    error.value = e.message
  } finally {
    isPending.value = false
  }
}

const signup = async (credentials: Credentials) => {
  try {
    const { email, password, passwordConfirm } = credentials
    error.value = null
    isPending.value = true
    await delay()
    if (password !== passwordConfirm) {
      throw new Error('As senhas não são iguais')
    }
    const { data, error: err } = await supabase.auth.signUp({
      email,
      password,
    })
    if (err) throw err
    user.value = data.user
  } catch (err) {
    const e = err as Error
    error.value = e.message
    console.log(e.message)
  } finally {
    isPending.value = false
  }
}

const getSession = async () => {
  const { data, error: err } = await supabase.auth.getSession()
  console.log(data, err)
}
// remove
const getUser = async () => {
  try {
    error.value = null
    isPending.value = true
    const { data, error: err } = await supabase.auth.getUser()
    if (err) throw err
    if (data.user) user.value = data.user
  } catch (err) {
    const e = err as Error
    console.log(e.message)
  } finally {
    isPending.value = false
  }
}

const isLogged = () => {
  return !!user.value
}

const useAuth = () => {
  return {
    login,
    loginWithOtp,
    logout,
    signup,
    getSession,
    getUser,
    isLogged,
    error,
    isPending,
    user,
  }
}

export default useAuth
