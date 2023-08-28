<script setup lang="ts">
import { ref } from 'vue'
import type { Credentials } from '../model'
const emit = defineEmits<{
  signup: [credentials: Credentials]
}>()
const credentials = ref<Credentials>({
  email: '',
  password: '',
  passwordConfirm: '',
})
const signup = () => {
  emit('signup', credentials.value)
}
</script>

<template>
  <v-form @submit.prevent="signup">
    <v-text-field
      v-model="credentials.email"
      hint="Digite o seu email de cadastro"
      label="Email"
      type="email"
      variant="outlined"
    />
    <v-text-field
      v-model="credentials.password"
      hint="A senha deve conter números e letras"
      label="Senha"
      type="password"
      variant="outlined"
    />
    <v-text-field
      v-model="credentials.passwordConfirm"
      hint="A senha deve conter números e letras"
      label="Confirme"
      type="password"
      variant="outlined"
    />
    <v-btn
      block
      color="primary"
      type="submit"
      >Cadastrar</v-btn
    >
    <div class="text-body-1">
      Já é cadastrado? Clique
      <RouterLink
        class="text-subtitle-1 text-decoration-none text-primary font-weight-black"
        :to="{ name: 'LoginView' }"
        >aqui</RouterLink
      >
    </div>
  </v-form>
</template>
