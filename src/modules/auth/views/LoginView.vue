<script setup lang="ts">
import useAuth from '@/modules/auth/composables/useAuth'
const { email, password, handleClick } = useAuth()
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-card elevation="6" class="pa-4 rounded" width="400">
      <v-card-title class="text-center text-h4 mb-4">Login</v-card-title>
      <v-form>
        <v-text-field
          v-model="email"
          hint="Digite o seu email de cadastro"
          type="email"
          label="Email"
          variant="outlined"
        />
        <v-text-field
          v-model="password"
          hint="A senha deve conter números e letras"
          type="password"
          label="Senha"
          variant="outlined"
        />
        <v-btn @click="handleClick" color="primary" block>Login</v-btn>
      </v-form>
      <p class="mt-3 text-subtitle text-body-1">
        Esqueceu a senha? Clique
        <RouterLink :to="{ name: 'HomeView' }">aqui</RouterLink> para restaurar
      </p>
    </v-card>
  </v-container>
</template>

<style scoped></style>
