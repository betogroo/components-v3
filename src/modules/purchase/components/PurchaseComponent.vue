<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import type { Purchase } from '../model'
import { Timestamp } from 'firebase/firestore'
const props = defineProps<Props>()
const { document: purchase, error } = await getDocument<Purchase>(
  'buy',
  props.id,
)
interface Props {
  id: string
}

const timestampToYear = (date: Timestamp) => {
  const seconds = date.seconds * 1000
  const year = new Date(seconds).getFullYear()
  return year
}
</script>

<template>
  <div>
    <v-row v-if="purchase">
      <v-col>Processo DSPSJB/{{ purchase.innerProcess }}</v-col>
      <v-col>{{ purchase.description }}</v-col>
      <v-col>{{ timestampToYear(purchase.date) }}</v-col>
    </v-row>
  </div>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
