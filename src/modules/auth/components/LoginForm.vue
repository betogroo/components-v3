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
}>()
const credentials = ref<Credentials>({
  email: '',
  password: '',
})

const handleSubmit = () => {
  emit('login', credentials.value)
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
  </v-form>
</template>
