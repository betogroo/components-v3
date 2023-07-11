<script setup lang="ts">
import type { ItemPurchase, Purchase } from '../model'
import getCollection from '@/shared/composables/getCollection'
// import useDate from '@/shared/composables/useDate'

//const props = defineProps<Props>()
const { documents } = await getCollection<ItemPurchase>(
  'purchase_item',
  'price',
)
console.log(documents.value)
/* interface Props {
  id?: string
} */
</script>

<template>
  <v-card>
    <v-card
      v-for="item in documents"
      :key="item.id"
      class="pa-1 ma-1"
      variant="outlined"
    >
      <v-card-title>{{ item.tittle }}</v-card-title>
      <v-card-subtitle> </v-card-subtitle>
    </v-card>
  </v-card>
</template>
