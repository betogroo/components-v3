<script setup lang="ts">
// components
import { PurchaseForm } from '../components'

// composables
import { usePurchase } from '../composable'
import { useRouter } from 'vue-router'

// types
import type { Purchase } from '../model'
const router = useRouter()

const { addPurchase, isLoading } = usePurchase()
const handleSubmit = (purchase: Purchase) => {
  addPurchase(purchase).then((data) => {
    //router.push({ name: 'PurchaseView', params: { id: data.id } })
    console.log(data?.id)
  })
}
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <v-card
      class="fill-height w-100"
      :loading="isLoading"
    >
      <v-card-title>Nova Compra</v-card-title>

      <PurchaseForm @submit-form="handleSubmit" />
    </v-card>
  </v-container>
</template>
