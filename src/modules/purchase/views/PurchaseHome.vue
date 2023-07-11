<script setup lang="ts">
import PurchaseCard from '../components/PurchaseCard.vue'
import AppLoader from '@/shared/components/AppLoader.vue'
/* import getCollection from '@/shared/composables/getCollection'
const { documents: purchases } = await getCollection<Purchase>('purchase') */
</script>

<template>
  <v-container>
    <RouterLink :to="{ name: 'PurchaseNew' }">Nova Compra</RouterLink>
    <div class="d-flex flex-wrap justify-center">
      <Suspense class="">
        <PurchaseCard />
        <template #fallback><AppLoader /></template>
      </Suspense>
    </div>
  </v-container>
</template>
