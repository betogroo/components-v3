<script setup lang="ts">
import { Credentials } from '../model'
import { ref } from 'vue'
interface Props {
  isPending: boolean
}
withDefaults(defineProps<Props>(), {
  isPending: false,
})

const emit = defineEmits<{
  login: [credentials: Credentials]
  loginWithOtp: [email: Credentials['email']]
}>()
const credentials = ref<Credentials>({
  email: '',
  password: '',
})

const handleSubmit = () => {
  emit('login', credentials.value)
}
const handleLoginOtp = () => {
  emit('loginWithOtp', credentials.value.email)
}
</script>

<template>
  <v-form
    :disabled="isPending"
    @submit.prevent="handleSubmit"
  >
    <v-text-field
      v-model="credentials!.email"
      hint="Digite o seu email de cadastro"
      label="Email"
      type="email"
      variant="outlined"
    />
    <v-text-field
      v-model="credentials!.password"
      hint="A senha deve conter números e letras"
      label="Senha"
      type="password"
      variant="outlined"
    />

    <v-btn
      block
      color="primary"
      type="submit"
      >Login</v-btn
    >
    <div class="text-center">ou</div>
    <v-btn
      block
      color="primary"
      @click="handleLoginOtp"
      >Receber link para acesso único</v-btn
    >
    <div class="text-body-1">
      Ainda não tem cadastro? Clique
      <RouterLink
        class="text-subtitle-1 text-decoration-none text-primary font-weight-black"
        :to="{ path: '/auth/signup' }"
        >aqui</RouterLink
      >
    </div>
  </v-form>
</template>
