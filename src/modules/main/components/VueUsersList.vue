<script setup lang="ts">
import type { User } from '../model/UserInterface'
interface Props {
  users: User[]
  age?: number
}
const props = defineProps<Props>()
</script>

<template>
  <v-list>
    <v-list-item
      v-for="user in users"
      :key="user.id"
    >
      {{ user.name }}
    </v-list-item>
  </v-list>
</template>
