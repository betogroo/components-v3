<script setup lang="ts">
import { ref, toRefs } from 'vue'

// components
import {
  PurchaseHead,
  PurchaseDetails,
  PurchaseItemForm,
  PurchaseItems,
} from '../components'
import { AppIconBtn } from '@/shared/components'

// composables
import { usePurchase, usePurchaseItem, useUtils } from '../composable'

// types
import type { PurchaseItemInsert } from '../model'

const props = defineProps<Props>()
interface Props {
  id: string
}
const { id } = toRefs(props)
const formActive = ref<boolean>(false)

const { getPurchase, purchase, error } = usePurchase()
const { itemsCount } = useUtils()
await getPurchase(id.value)

const { addData: _addPurchaseItem, isPending: isFormPending } =
  usePurchaseItem()
const addPurchaseItem = async (formValues: PurchaseItemInsert) => {
  const newData = { ...formValues, purchase_id: id.value }
  await _addPurchaseItem(newData).then(() => {
    formActive.value = false
    // getPurchaseItems(id.value)
  })
}

const toggleForm = () => {
  formActive.value = !formActive.value
}

const iconClick = (index: number) => {
  const title = purchase.value?.purchaseItems
    ? purchase.value.purchaseItems[index].title
    : ''
  console.log(title)
}
</script>
<template>
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
        outer-process-title="Processo SEI"
        :purchase="purchase"
      />
      {{
        itemsCount(
          purchase.purchaseItems?.length ? purchase.purchaseItems.length : 0,
        )
      }}
      <AppIconBtn
        :toggle-btn="formActive"
        tooltip-title="Adicionar produto"
        @handle-click="toggleForm"
      />
      <PurchaseItemForm
        v-if="formActive"
        :is-pending="isFormPending"
        @submit-form="(n) => addPurchaseItem(n)"
      />
      <PurchaseItems
        v-for="(item, index) in purchase.purchaseItems"
        :key="item.id"
        :item="item"
        @icon-click="iconClick(index)"
      />
    </div>
  </v-container>
</template>
