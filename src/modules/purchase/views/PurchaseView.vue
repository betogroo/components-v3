<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'

// components
import {
  PurchaseHead,
  PurchaseDetails,
  PurchaseItemForm,
  PurchaseItems,
  AppLoader,
} from '../components'
import { AppIconBtn } from '@/shared/components'

// composables
import { usePurchase, getDocument, useUpdateField } from '../composable'

// types
import type { Purchase, PurchaseItem } from '../model'

const props = defineProps<Props>()
interface Props {
  idPurchase: string
}
const { idPurchase } = toRefs(props)
const formActive = ref(false)

const {
  document: purchase,
  error,
  isLoading,
} = await getDocument<Purchase>('purchase', idPurchase.value)

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

const purchaseItems = computed(() => {
  return purchase.value?.purchaseItems
})

const toggleForm = () => {
  formActive.value = !formActive.value
}

const iconClick = (index: number) => {
  console.log(purchaseItems.value![index].tittle)
}
</script>

<template>
  <AppLoader v-if="isLoading" />
  <v-container>
    <v-alert
      v-show="error"
      :text="error?.message"
      type="error"
    ></v-alert>
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
        v-for="(item, index) in purchaseItems"
        :key="item.id"
        :item="item"
        @icon-click="iconClick(index)"
      />
    </div>
  </v-container>
</template>
