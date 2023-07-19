<script setup lang="ts">
import { usePurchase } from '../composable'

import type { Purchase } from '../model'

defineProps<Props>()
interface Props {
  purchase: Purchase
}

const { innerProcessFormatName, dateFormat } = usePurchase()
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
      <v-row
        align="center"
        dense
      >
        <v-col cols="9">
          <v-card-title class="text-subtitle-1">{{
            innerProcessFormatName(purchase)
          }}</v-card-title>
          <v-card-subtitle class="text-subtitle-2">{{
            purchase.description
          }}</v-card-subtitle>
        </v-col>
        <v-col>
          <v-card-subtitle class="text-right">
            {{ dateFormat(purchase.createdAt) }}
          </v-card-subtitle>
        </v-col>
      </v-row>
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
