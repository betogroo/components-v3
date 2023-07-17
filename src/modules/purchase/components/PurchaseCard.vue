<script setup lang="ts">
import type { Purchase } from '../model'
defineProps<Props>()
interface Props {
  purchase: Purchase
}
</script>

<template>
  <v-card
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
