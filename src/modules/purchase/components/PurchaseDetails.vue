<script setup lang="ts">
import { toRefs } from 'vue'
// types
import { PurchaseWithItems } from '../model'

import { useUtils } from '../composable'
const props = defineProps<Props>()

interface Props {
  purchase: PurchaseWithItems
  outerProcessTitle: string
}

const { purchase } = toRefs(props)
const { itemsCount } = useUtils()
</script>

<template>
  <h2 class="text-subtitle-2 ml-3">Detalhes</h2>
  <div class="my-2">
    <div>
      <h5 class="font-weight-regular">
        Processo aberto por {{ purchase.purchaseOwner?.full_name }}
      </h5>
    </div>
    <div v-if="purchase.outerProcess">
      <h5 class="font-weight-regular">
        {{ outerProcessTitle }}: {{ purchase.outerProcess }}
      </h5>
    </div>
    <div>
      <v-row>
        <v-col>
          <h5 class="font-weight-regular">
            {{
              purchase.purchaseItems
                ? itemsCount(purchase.purchaseItems.length)
                : ''
            }}
          </h5>
        </v-col>
        <v-col>
          <h5 class="font-weight-regular">Valor total: [R$56,25]</h5>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
