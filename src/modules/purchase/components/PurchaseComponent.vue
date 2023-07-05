<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import type { Purchase } from '../model'
const props = defineProps<Props>()
const { document: purchase, error } = await getDocument<Purchase>(
  'buy',
  props.id,
)
interface Props {
  id: string
}
</script>

<template>
  <v-card v-if="purchase">
    <v-card-title>Processo {{ purchase.innerProcess }}</v-card-title>
    <v-card-text> {{ purchase.description }} </v-card-text>
  </v-card>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
