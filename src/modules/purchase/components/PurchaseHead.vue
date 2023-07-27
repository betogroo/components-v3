<script setup lang="ts">
import { usePurchase } from '../composable'
import { UpdateSingleField } from '@/shared/components'
import type { Purchase } from '../model'
defineProps<Props>()
interface Props {
  purchase: Purchase
}
const { innerProcessFormatName, dateFormat } = usePurchase()
</script>

<template>
  <div class="d-flex align-center justify-space-between my-2">
    <div class="d-flex flex-column">
      <span class="font-weight-black">
        {{ innerProcessFormatName(purchase) }}
      </span>
      <span class="font-weight-light">{{ purchase.description }}</span>
    </div>
    <span class="font-weight-light">{{ dateFormat(purchase.createdAt) }}</span>
  </div>
  <div></div>
</template>
