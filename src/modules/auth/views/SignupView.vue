<script setup lang="ts">
import { useRouter } from 'vue-router'
import { SignupForm } from '../components'
import { useAuth } from '../composables'
import type { Credentials } from '../model'

const { signup, isPending, error } = useAuth()
const router = useRouter()
const handleSignup = async (credentials: Credentials) => {
  await signup(credentials).then(() => {
    if (error.value) return
    router.push({ name: 'ProfileView' })
  })
  console.log(credentials)
}
</script>

<template>
  <v-container class="fill-height justify-center align">
    <v-card
      class="pa-4 rounded"
      elevation="6"
      :loading="isPending"
      width="400"
    >
      <v-card-title class="text-center text-h4 mb-4">Registro</v-card-title>
      <SignupForm @signup="(n) => handleSignup(n)" />
      <v-alert
        v-if="error"
        class="pa-2 ma-2"
        type="error"
        >{{ error }}</v-alert
      >
    </v-card>
  </v-container>
</template>
