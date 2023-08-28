<script setup lang="ts">
import type { AuthUser } from '@supabase/supabase-js'
import { toRefs } from 'vue'

interface Props {
  user: AuthUser | undefined | null
}
const props = defineProps<Props>()
const emit = defineEmits(['toggleDrawer', 'logout'])
const { user } = toRefs(props)
const handleLogout = async () => {
  emit('logout')
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
        @click="handleLogout"
      ></v-btn>
    </template>
  </v-app-bar>
</template>
