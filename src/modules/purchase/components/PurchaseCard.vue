<script setup lang="ts">
// components
import { PurchaseHead } from '.'

// types
import type { Purchase } from '../model'

defineProps<Props>()
interface Props {
  purchase: Purchase
}
</script>

<template>
  <v-card
    class="ma-1 rounded-lg"
    density="compact"
    elevation="4"
    variant="elevated"
    width="400"
  >
    <v-card-item>
      <PurchaseHead :purchase="purchase" />
    </v-card-item>
    <v-card-text> Detalhes </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
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

<style lang="scss" scoped></style>
