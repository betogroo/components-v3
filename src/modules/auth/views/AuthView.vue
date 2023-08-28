<script setup lang="ts">
import { toRefs, watch } from 'vue'
import { useAuth } from '../composables'
import { Credentials } from '../model'
import { LoginForm, SignupForm } from '../components'
import { useRouter } from 'vue-router'
const props = defineProps<Props>()
const { isPending, error, login, signup } = useAuth()
const router = useRouter()
const handleLogin = async (credentials: Credentials) => {
  await login(credentials)
  if (!error.value) router.push({ name: 'ProfileView' })
}
const handleSignup = async (credentials: Credentials) => {
  await signup(credentials).then(() => {
    if (error.value) return
    router.push({ name: 'ProfileView' })
  })
}

interface Props {
  type: 'login' | 'signup'
}
const { type } = toRefs(props)
watch(type, () => {
  isPending.value = false
  error.value = null
})
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-card
      class="pa-4 rounded"
      elevation="6"
      :loading="isPending"
      width="400"
    >
      <v-card-title class="text-center text-h4 mb-4">{{
        type === 'login' ? 'Login' : 'Signup'
      }}</v-card-title>
      <LoginForm
        v-if="type === 'login'"
        :is-pending="isPending"
        @login="(n) => handleLogin(n)"
      />
      <SignupForm
        v-if="type === 'signup'"
        @signup="(n) => handleSignup(n)"
      />
      <v-alert
        v-if="error"
        class="pa-2 ma-2"
        type="error"
        >{{ error }}</v-alert
      >
    </v-card>
  </v-container>
</template>
