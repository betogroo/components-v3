<script setup lang="ts">
import type { Purchase } from '../model'
import getCollection from '@/shared/composables/getCollection'
//const props = defineProps<Props>()
const { documents: purchases } = await getCollection<Purchase>(
  'purchase',
  'innerProcess',
)
/* interface Props {
  purchases: Purchase[]
} */
</script>

<template>
  <v-card
    v-for="purchase in purchases"
    :key="purchase.id"
    class="ma-1"
    variant="outlined"
    width="400"
  >
    <v-card-item>
      <v-card-title>Processo {{ purchase.innerProcess }}</v-card-title>
      <v-card-subtitle>{{ purchase.description }}</v-card-subtitle>
    </v-card-item>
    <v-card-text> Detalhes </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        :to="{
          name: 'PurchaseView',
          params: { id: purchase.id!.toString() },
        }"
        variant="outlined"
        >Ver</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
