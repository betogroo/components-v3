<script setup lang="ts">
import { ref } from 'vue'
import { AppBar, AppNavDrawer } from '@/shared/components/'

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>
<template>
  <v-app>
    <AppBar
      :drawer="drawer"
      @toggle-drawer="toggleDrawer"
    />
    <AppNavDrawer :drawer="drawer" />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
