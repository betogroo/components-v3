<script setup lang="ts">
import useAuth from '@/modules/auth/composables/useAuth'
const { auth, user, signOut } = useAuth()
const handleClick = async () => {
  await signOut(auth)
}
</script>
<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Components</v-app-bar-title>
    <div>
      <v-btn :to="{ name: 'HomeView' }">Home</v-btn>
      <v-btn :to="{ name: 'CounterView' }">Counter</v-btn>
      <v-btn :to="{ name: 'AboutView' }">About</v-btn>
      <template v-if="!user">
        <v-btn :to="{ name: 'LoginView' }">Login</v-btn>
        <v-btn :to="{ name: 'SignupView' }">Signup</v-btn>
      </template>
      <template v-else>
        {{ user.email }}
        <v-btn @click="handleClick">Logout</v-btn>
      </template>
    </div>
  </v-app-bar>
  {{ user }}
</template>
