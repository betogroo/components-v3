import { ref } from 'vue'
import { supabase } from '@/plugins/supabase'
import { useAuth } from '@/modules/auth/composables'
import { ProfileInsert } from '../model'
const { getSession } = useAuth()
const profile = ref<ProfileInsert>({ username: '', id: '' })
const isPending = ref(false)
const error = ref<null | string>(null)

const useProfile = () => {
  const getProfile = async () => {
    try {
      error.value = null
      isPending.value = true
      const { data, error: userErr } = await supabase.auth.getUser()
      if (userErr) throw userErr
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
  return { isPending, error, profile, getSession, getProfile }
}

export default useProfile
