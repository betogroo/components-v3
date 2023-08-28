<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AppBar, AppNavDrawer, AppLoader } from '@/shared/components/'
import { supabase } from './plugins/supabase'
import { useAuth } from './modules/auth/composables'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const { user, getUser, logout } = useAuth()
const router = useRouter()
const route = useRoute()

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const handleLogout = async () => {
  await logout().then(() => {
    router.push({ path: '/auth/login' })
  })
}

onMounted(() => {
  supabase.auth.onAuthStateChange(() => {
    getUser()
  })
})
</script>
<template>
  <v-app>
    <AppBar
      v-if="!route.meta.hideNavBar"
      :user="user"
      @logout="handleLogout"
      @toggle-drawer="toggleDrawer"
    />
    <AppNavDrawer v-model="drawer" />
    <v-main>
      <Suspense>
        <RouterView />
        <template #fallback>
          <AppLoader />
        </template>
      </Suspense>
    </v-main>
  </v-app>
</template>
