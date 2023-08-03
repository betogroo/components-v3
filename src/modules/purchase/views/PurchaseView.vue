<script setup lang="ts">
import { ref, toRefs } from 'vue'
import {
  PurchaseHead,
  PurchaseDetails,
  PurchaseItemForm,
  PurchaseItems,
} from '../components'

import { AppIconBtn } from '@/shared/components'

// composables
import { usePurchase } from '../composable'
import { getDocument, useUpdateField } from '@/shared/composables'

// types
import type { Purchase, PurchaseItem } from '../model'

const props = defineProps<Props>()
interface Props {
  idPurchase: string
}
const { idPurchase } = toRefs(props)
const formActive = ref(false)

const { document: purchase } = getDocument<Purchase>(
  'purchase',
  idPurchase.value,
)

const { updateArray } = useUpdateField<PurchaseItem>(
  'purchase',
  'purchaseItems',
)

const { itemsCount } = usePurchase()

const addPurchaseItem = (formValues: PurchaseItem) => {
  updateArray(formValues, idPurchase.value).then(() => {
    formActive.value = false
    console.log(formValues)
  })
}

const toggleForm = () => {
  formActive.value = !formActive.value
}
</script>

<template>
  <div>MOCH: Purchase View</div>
  <div v-if="purchase">
    <PurchaseHead :purchase="purchase" />
    <v-divider></v-divider>
    <PurchaseDetails
      inner-process-title="Processo SEI"
      :purchase="purchase"
    />
    {{ itemsCount(purchase.purchaseItems?.length || 0) }}
    <AppIconBtn
      :toggle-btn="formActive"
      tooltip-title="Adicionar produto"
      @handle-click="toggleForm"
    />
    <PurchaseItemForm
      v-if="formActive"
      @submit-form="addPurchaseItem"
    />
    <PurchaseItems
      v-for="item in purchase.purchaseItems"
      :key="item.id"
      :item="item"
    />
  </div>
  <div v-show="!purchase">
    <v-alert
      text="Não há items cadastrados"
      type="error"
    ></v-alert>
  </div>
</template>
