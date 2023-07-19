<script setup lang="ts">
import PurchaseCard from '../components/PurchaseCard.vue'
import AppLoader from '@/shared/components/AppLoader.vue'
import { getCollection } from '@/shared/composables/'
import { Purchase } from '../model/Purchase'

const {
  documents: purchases,
  isLoading,
  error,
} = getCollection<Purchase>('purchase', 'innerProcess')
</script>

<template>
  <AppLoader v-if="isLoading" />
  <v-container>
    <RouterLink :to="{ name: 'PurchaseNew' }">Nova Compra</RouterLink>
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
