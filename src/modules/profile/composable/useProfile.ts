import { ref } from 'vue'
import { supabase, User } from '@/plugins/supabase'
import { useAuth } from '@/modules/auth/composables'
import { ProfileInsert } from '../model'
const { getSession } = useAuth()
const profile = ref<ProfileInsert>({ username: '', id: '' })
const user = ref<User>()
const isPending = ref(false)
const isSuccess = ref<false | string>(false)
const error = ref<null | string>(null)

const useProfile = () => {
  const getProfile = async () => {
    try {
      error.value = null
      isPending.value = true
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
          profile.value.username = profileData.username
          profile.value.website = profileData.website
          profile.value.full_name = profileData.full_name
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
      const { data, error: err } = await supabase
        .from('profiles')
        .upsert(updates)
      if (err) throw err
      isSuccess.value = 'Atualizado com sucesso'
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
    isSuccess,
    error,
    profile,
    user,
    getSession,
    getProfile,
    updateProfile,
  }
}

export default useProfile
