import { ref } from 'vue'

const useProfile = () => {
  const isLoading = ref(false)
  const error = ref(null)
  const title = ref('Profile View')
  return { isLoading, error, title }
}

export default useProfile
