<script setup lang="ts">
// components
import { PurchaseForm } from '../components'

// composables
import { usePurchase } from '../composable'
import { useRouter } from 'vue-router'

// types
import type { PurchaseInsert } from '../model'
const router = useRouter()

const { addData, isPending, error } = usePurchase()
const handleSubmit = (purchase: PurchaseInsert) => {
  addData(purchase).then((data) => {
    if (!data) return
    router.push({ name: 'PurchaseView', params: { id: data?.id } })
  })
}
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <v-card class="fill-height w-100">
      <v-card-title>Nova Compra</v-card-title>
      <PurchaseForm
        :is-pending="isPending"
        @submit-form="(n) => handleSubmit(n)"
      />
      <v-alert
        v-if="error"
        class="pa-2 ma-2"
        type="error"
        >{{ error }}</v-alert
      >
    </v-card>
  </v-container>
</template>
