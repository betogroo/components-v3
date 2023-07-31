<script setup lang="ts">
import type { User } from '../model/UserInterface'
import VueFormOne from '../components/VueFormOne.vue'
import VueFormTwo from '../components/VueFormTwo.vue'
import { reactive, ref } from 'vue'
import VueUsersList from '../components/VueUsersList.vue'

const users = reactive<User[]>([
  {
    id: 1,
    name: 'Betão',
    age: 44,
  },
  {
    id: 2,
    name: 'Olavão',
    age: 85,
  },
  {
    id: 3,
    name: 'Cesão',
    age: 60,
  },
])
const age = ref<number>(0)
const changeAge = (newValue: number) => {
  age.value = Number(newValue)
}
</script>
<template>
  <h1 class="text-center">Home</h1>
  <v-card class="ma-2 pa-2">
    <v-card-title>Formulário 01</v-card-title>
    <VueFormOne />
  </v-card>
  <v-card class="ma-2 pa-2">
    <v-card-title>Formulário 02</v-card-title>
    <v-text-field
      v-model.number="age"
      type="number"
    />
  </v-card>
  <v-card>
    <v-card-title> Usuários </v-card-title>
    <VueUsersList
      :age="Number(age)"
      :users="users"
      @get-age="changeAge"
    />
  </v-card>
</template>
