import { ref } from 'vue'
import { supabase } from '@/plugins/supabase'

const email = ref('beto@beto.com')
const password = ref('123456')
const error = ref<Error | null | string>(null)
const isPending = ref(false)
const user = ref()

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

const login = async () => {
  try {
    error.value = null
    isPending.value = true
    await delay()
    const { data, error: err } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
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

const signup = async () => {
  try {
    error.value = null
    isPending.value = true
    await delay()
    const { error: err } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (err) throw err
  } catch (err) {
    const e = err as Error
    error.value = e.message
    console.log(e)
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
  const { data, error: err } = await supabase.auth.getUser()
  if (data.user) user.value = data.user
  console.log(data.user?.id, err?.message)
}

const useAuth = () => {
  return {
    email,
    password,
    login,
    logout,
    signup,
    getSession,
    getUser,
    error,
    isPending,
    user,
  }
}

export default useAuth
