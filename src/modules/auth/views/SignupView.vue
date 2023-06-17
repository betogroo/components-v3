<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '@/modules/auth/composables/useAuth'

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
    <v-card
      class="pa-4 rounded"
      elevation="6"
      :loading="isPending"
      width="400"
    >
      <v-card-title class="text-center text-h4 mb-4">Registro</v-card-title>
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
          @click="handleClick"
          >Gravar</v-btn
        >
        <v-alert
          v-if="error"
          class="mt-3"
          type="error"
          >{{ error }}</v-alert
        >
      </v-form>
    </v-card>
  </v-container>
</template>
