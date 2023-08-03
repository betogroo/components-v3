<script setup lang="ts">
// components
import { PurchaseForm } from '../components'

// composables
import { addDocument } from '../composable'
import { useRouter } from 'vue-router'

// types
import type { Purchase } from '../model'
const router = useRouter()

const { addDocument: addPurchase, recordId } = addDocument('purchase')
const handleSubmit = (purchase: Purchase) => {
  addPurchase(purchase).then(() => {
    router.push({ name: 'PurchaseView', params: { id: recordId.value } })
  })
}
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <v-card class="fill-height w-100">
      <v-card-title>Nova Compra</v-card-title>
      <PurchaseForm @submit-form="handleSubmit" />
    </v-card>
    <h1>Id: {{ recordId }}</h1>
  </v-container>
</template>
