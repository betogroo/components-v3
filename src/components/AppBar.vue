<script setup lang="ts">
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
const { user, logout } = useAuth()
const router = useRouter()
const handleClick = async () => {
  await logout()
  router.push({ name: 'LoginView' })
}
</script>
<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Components</v-app-bar-title>
    <div>
      <template v-if="user">
        <v-btn :to="{ name: 'HomeView' }">Home</v-btn>
        <v-btn :to="{ name: 'CounterView' }">Counter</v-btn>
        <v-btn :to="{ name: 'AboutView' }">About</v-btn>
        {{ user.email }}
        <v-btn @click="handleClick">Logout</v-btn>
      </template>
      <template v-if="!user">
        <v-btn :to="{ name: 'LoginView' }">Login</v-btn>
        <v-btn :to="{ name: 'SignupView' }">Signup</v-btn>
      </template>
    </div>
  </v-app-bar>
</template>
