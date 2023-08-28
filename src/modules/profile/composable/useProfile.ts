import { ref, reactive } from 'vue'
import { supabase, User } from '@/plugins/supabase'
import { useAuth } from '@/modules/auth/composables'
import { ProfileInsert, ProfileUpdate, Profile } from '../model'
const { getSession } = useAuth()
const profile = ref<Profile>({
  avatar_url: '',
  full_name: '',
  id: '',
  updated_at: '',
  username: '',
  website: '',
})
const user = ref<User>()
const isPending = ref(false)
const error = ref<null | string>(null)

const delay = (amount = 2000, msg = false): Promise<void> => {
  if (msg) {
    console.log(`Delay de ${amount / 1000} segundos para testes!`)
  }
  return new Promise((resolve) => setTimeout(resolve, amount))
}

const useProfile = () => {
  const getProfile = async () => {
    try {
      error.value = null
      isPending.value = true
      await delay()
      const { data, error: userErr } = await supabase.auth.getUser()
      if (userErr) throw userErr
      user.value = data.user
      if (data) {
        const {
          data: profileData,
          error: profileErr,
          status,
        } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single()
        if (profileErr && status !== 406) throw profileErr
        if (profileData) {
          /* profile.username = profileData.username
          profile.website = profileData.website
          profile.full_name = profileData.full_name */
          profile.value = profileData
        }
      }
    } catch (err) {
      const e = err as Error
      error.value = e.message
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  const updateProfile = async (updates: ProfileInsert) => {
    try {
      error.value = null
      isPending.value = true
      await delay()
      const { data, error: err } = await supabase
        .from('profiles')
        .upsert(updates)
      if (err) throw err
    } catch (err) {
      const e = err as Error
      error.value = e.message
      console.log(e)
    } finally {
      isPending.value = false
    }
  }
  return {
    isPending,
    error,
    profile,
    user,
    getSession,
    getProfile,
    updateProfile,
  }
}

export default useProfile
