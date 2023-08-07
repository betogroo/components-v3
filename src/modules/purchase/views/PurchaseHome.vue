<script setup lang="ts">
// components
import { PurchaseCard } from '../components'

// composables
import AppLoader from '@/shared/components/AppLoader.vue'
import { getCollection } from '@/shared/composables/'

// types
import { Purchase } from '../model/Purchase'

const {
  documents: purchases,
  isLoading,
  error,
} = await getCollection<Purchase>('purchase', 'innerProcess')
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
    <div class="d-flex flex-wrap justify-center">
      <v-alert
        v-if="error"
        type="warning"
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
