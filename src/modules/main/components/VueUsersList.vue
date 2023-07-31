<script setup lang="ts">
import { computed } from 'vue'
import type { User } from '../model/UserInterface'
interface Props {
  users: User[]
  age: number
}
const props = defineProps<Props>()
const emit = defineEmits<{
  getAge: [value: number]
}>()
const myAge = computed({
  get(): number {
    return props.age
  },
  set(newValue: number) {
    emit('getAge', Number(newValue))
  },
})
</script>

<template>
  <v-text-field v-model="myAge" />
  <v-list>
    <v-list-item
      v-for="user in users"
      :key="user.id"
    >
      {{ user.name }}
    </v-list-item>
  </v-list>
</template>
