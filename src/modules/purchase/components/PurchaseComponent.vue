<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import type { Purchase } from '../model'
import { PurchaseHead, PurchaseDetails } from '../components'
const props = defineProps<Props>()
const { document: purchase, error } = await getDocument<Purchase>(
  'purchase',
  props.id,
)
interface Props {
  id: string
  countRecords: number
}
</script>

<template>
  <div v-if="purchase">
    <PurchaseHead :purchase="purchase" />
    <v-divider
      class="mb-2"
      :thickness="2"
    ></v-divider>
    <h2 class="text-subtitle-1 ml-3">Detalhes do Processo</h2>
    <PurchaseDetails
      inner-process-title="Processo SEI"
      :purchase="purchase"
    />
    <v-divider></v-divider>
    <h1 class="text-subtitle-1 ml-3">Texto</h1>
    <v-row align="center">
      <v-col v-if="countRecords">{{ countRecords }} produtos cadastrados</v-col>
      <v-col><v-btn>+</v-btn></v-col>
    </v-row>
  </div>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
