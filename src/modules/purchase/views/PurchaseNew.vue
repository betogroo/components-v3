<script setup lang="ts">
import PurchaseForm from '../components/PurchaseForm.vue'
import { addDocument } from '@/shared/composables/'
import type { Purchase } from '../model'

const { addDocument: addPurchase } = addDocument('purchase')
const handleSubmit = (purchase: Purchase) => {
  addPurchase(purchase)
}
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <v-card class="fill-height w-100">
      <v-card-title>Nova Compra</v-card-title>
      <PurchaseForm @submit-form="handleSubmit" />
    </v-card>
  </v-container>
</template>
