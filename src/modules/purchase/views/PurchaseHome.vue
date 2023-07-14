<script setup lang="ts">
import PurchaseCard from '../components/PurchaseCard.vue'
import AppLoader from '@/shared/components/AppLoader.vue'
import getCollection from '@/shared/composables/getCollection'
import { Purchase } from '../model/Purchase'

const { documents: purchases, isLoading } = getCollection<Purchase>(
  'purchase',
  'innerProcess',
)
</script>

<template>
  <v-container>
    <RouterLink :to="{ name: 'PurchaseNew' }">Nova Compra</RouterLink>
    <AppLoader v-if="isLoading" />
    <div class="d-flex flex-wrap justify-center">
      <Suspense>
        <template #default>
          <PurchaseCard
            v-for="purchase in purchases"
            :key="purchase.id"
            :purchase="purchase"
          />
        </template>
        <template #fallback> Loading ... </template>
      </Suspense>
    </div>
  </v-container>
</template>
