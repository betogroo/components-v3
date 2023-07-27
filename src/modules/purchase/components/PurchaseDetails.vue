<script setup lang="ts">
import { Purchase } from '../model'
import { UpdateSingleField } from '@/shared/components'

interface Props {
  purchase: Purchase
  innerProcessTitle: string
}
defineProps<Props>()
</script>

<template>
  <div class="my-2">
    <div v-if="purchase.outerProcess">
      <h5 class="font-weight-regular">
        {{ innerProcessTitle }}: {{ purchase.outerProcess }}
      </h5>
    </div>
    <div v-else>
      <UpdateSingleField
        :id="purchase.id!"
        collection="purchase"
        field="outerProcess"
        label="Processo SEI"
      />
    </div>
  </div>
</template>
