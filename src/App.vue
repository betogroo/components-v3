<script setup lang="ts">
import { ref } from 'vue'
import { AppBar, AppNavDrawer, AppLoader } from '@/shared/components/'

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>
<template>
  <v-app>
    <AppBar @toggle-drawer="toggleDrawer" />
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
