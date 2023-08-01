<script setup lang="ts">
import { toRefs } from 'vue'
import { getDocument } from '@/shared/composables'
import { PurchaseHead, PurchaseDetails } from '../components'

// types
import type { Purchase } from '../model'

interface Props {
  idPurchase: string
}
const props = defineProps<Props>()
const { idPurchase } = toRefs(props)

const { document: purchase } = getDocument<Purchase>(
  'purchase',
  idPurchase.value,
)
</script>

<template>
  <div>MOCH: Purchase View</div>
  <div>{{ idPurchase }}</div>
  <div>{{ purchase }}</div>
  <div v-if="purchase">
    <PurchaseHead :purchase="purchase" />
    <v-divider></v-divider>
    <PurchaseDetails
      inner-process-title="Processo SEI"
      :purchase="purchase"
    />
  </div>
</template>
