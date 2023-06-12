import { ref } from 'vue'
const useAuth = () => {
  const email = ref('')
  const password = ref('')

  const handleClick = () => {
    console.log(email.value, password.value)
  }
  return { email, password, handleClick }
}

export default useAuth
