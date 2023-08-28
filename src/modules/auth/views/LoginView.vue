<script setup lang="ts">
import { useAuth } from '../composables'
import { Credentials } from '../model'
import { useRouter } from 'vue-router'
import { LoginForm } from '../components'
const { isPending, error, login } = useAuth()
const router = useRouter()
const handleLogin = async (credentials: Credentials) => {
  await login(credentials)
  if (!error.value) router.push({ name: 'ProfileView' })
}
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-card
      class="pa-4 rounded"
      elevation="6"
      :loading="isPending"
      width="400"
    >
      <v-card-title class="text-center text-h4 mb-4">Login</v-card-title>
      <LoginForm
        :is-pending="isPending"
        @login="(n) => handleLogin(n)"
      />
      <v-alert
        v-if="error"
        type="error"
        >{{ error }}</v-alert
      >
    </v-card>
  </v-container>
</template>

<style scoped></style>
