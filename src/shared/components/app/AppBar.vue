<script setup lang="ts">
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'

const emit = defineEmits(['toggleDrawer'])
const { user, logout } = useAuth()
const router = useRouter()

const handleClick = async () => {
  await logout()
  router.push({ name: 'LoginView' })
}

const toggleDrawer = () => {
  emit('toggleDrawer')
}
</script>
<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <template v-if="user">
      <v-btn
        icon="mdi-home"
        :to="{ name: 'HomeView' }"
      ></v-btn>
      <v-btn
        icon="mdi-cart-plus"
        :to="{ name: 'PurchaseHome' }"
      ></v-btn>
      <v-btn
        icon="mdi-information"
        :to="{ name: 'AboutView' }"
      ></v-btn>
      <v-btn
        icon="mdi-account"
        :to="{ name: 'ProfileView' }"
      ></v-btn>

      <v-btn
        icon="mdi-logout"
        @click="handleClick"
      ></v-btn>
    </template>
    <template v-if="!user">
      <v-btn
        icon="mdi-login"
        :to="{ name: 'LoginView' }"
      ></v-btn>
      <v-btn
        icon="mdi-account-plus"
        :to="{ name: 'SignupView' }"
      ></v-btn>
    </template>
  </v-app-bar>
</template>
