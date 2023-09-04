<script setup lang="ts">
// components
import { PurchaseCard } from '../components'
import { AppLoader } from '../components/'

// composables
import { usePurchase } from '../composable'
import { useUtils } from '../composable'

const { getPurchases, isLoading, purchases, error, purchaseCount } =
  usePurchase()
await getPurchases()

const { itemsCount } = useUtils()
</script>

<template>
  <AppLoader v-if="isLoading" />
  <v-container>
    <v-btn
      block
      color="primary"
      :to="{ name: 'PurchaseNew' }"
      variant="elevated"
      >Nova Compra</v-btn
    >
    <div class="text-subtitle">
      {{ itemsCount(purchaseCount!, 'processo', 'processos') }}
    </div>
    <div class="d-flex flex-wrap justify-center">
      <v-alert
        v-if="error"
        type="error"
        >{{ error.message }}</v-alert
      >
      <PurchaseCard
        v-for="purchase in purchases"
        :key="purchase.id"
        :purchase="purchase"
      />
    </div>
  </v-container>
</template>
