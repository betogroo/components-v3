<script setup lang="ts">
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
const { email, password, isPending, error, user, login, getSession, logout } =
  useAuth()
const router = useRouter()

const handleLogin = async () => {
  await login()
  if (!error.value) router.push({ name: 'HomeView' })
}

const handleSession = async () => {
  await getSession()
}

const handleLogout = async () => {
  await logout()
}
</script>

<template>
  <v-container class="fill-height justify-center">
    <div
      v-if="user"
      class="text-h6"
    >
      {{ user.email || 'username' }}
    </div>
    <v-card
      class="pa-4 rounded"
      elevation="6"
      :loading="isPending"
      width="400"
    >
      <v-card-title class="text-center text-h4 mb-4">Login</v-card-title>
      <v-form>
        <v-text-field
          v-model="email"
          hint="Digite o seu email de cadastro"
          label="Email"
          type="email"
          variant="outlined"
        />
        <v-text-field
          v-model="password"
          hint="A senha deve conter números e letras"
          label="Senha"
          type="password"
          variant="outlined"
        />

        <v-btn
          block
          color="primary"
          @click="handleLogin"
          >Login</v-btn
        >

        <v-btn
          block
          color="purple"
          @click="handleSession"
          >Get Session</v-btn
        >
        <v-btn
          block
          color="error"
          @click="handleLogout"
          >Logout</v-btn
        >
      </v-form>
      <p class="mt-3 text-subtitle text-body-1">
        Esqueceu a senha? Clique
        <RouterLink :to="{ name: 'HomeView' }">aqui</RouterLink> para restaurar
      </p>
      <v-alert
        v-if="error"
        type="error"
        >{{ error }}</v-alert
      >
    </v-card>
  </v-container>
</template>

<style scoped></style>
