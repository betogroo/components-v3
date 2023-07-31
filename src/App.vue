<script setup lang="ts">
import { ref } from 'vue'
import AppBar from '@/shared/components/app/AppBar.vue'

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
    <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
