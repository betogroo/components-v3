<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '@/composables/useAuth'

const email = ref('')
const password = ref('')
const { signup, isPending, error } = useAuth()
const router = useRouter()
const handleClick = async () => {
  await signup(email.value, password.value)
  if (!error.value) {
    router.push({ name: 'HomeView' })
  }
}
</script>

<template>
  <v-container class="fill-height justify-center align">
    <v-card :loading="isPending" elevation="6" class="pa-4 rounded" width="400">
      <v-card-title class="text-center text-h4 mb-4">Registro</v-card-title>
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
        <v-btn @click="handleClick" color="primary" block>Gravar</v-btn>
        <v-alert v-if="error" class="mt-3" type="error">{{ error }}</v-alert>
      </v-form>
    </v-card>
  </v-container>
</template>
