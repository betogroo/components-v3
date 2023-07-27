<script setup lang="ts">
import { ref } from 'vue'
import type { ItemPurchase } from '../model'
import {
  PurchaseComponent,
  PurchaseItemForm,
  PurchaseItems,
} from '../components'
import { addDocument, getCollection } from '@/shared/composables'
import AppBackBtn from '@/shared/components/AppBackBtn.vue'

const props = defineProps<Props>()
const { documents: purchaseItems, countRecords } = getCollection<ItemPurchase>(
  'purchase_item',
  'price',
  'purchase_id',
  props.id,
)
interface Props {
  id: string
}

const itemFormVisible = ref(false)
const { addDocument: addPurchaseItem } = addDocument('purchase_item')
const showForm = () => {
  itemFormVisible.value = !itemFormVisible.value
}
const submitForm = (purchaseItem: ItemPurchase) => {
  console.log('submit')
  addPurchaseItem(purchaseItem).then(() => {
    showForm()
  })
}
</script>

<template>
  <v-container>
    <Suspense>
      <!-- component with nested async dependencies -->
      <template #default>
        <PurchaseComponent
          :id="props.id"
          :count-records="countRecords"
          @toggle-form="showForm"
        />
      </template>
      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
    <PurchaseItemForm
      v-show="itemFormVisible"
      :purchase_id="id"
      @submit-form="submitForm"
    />

    <PurchaseItems
      v-for="item in purchaseItems"
      v-show="!itemFormVisible"
      :key="item.id"
      :item="item"
      @show-form="showForm"
    />
    <AppBackBtn />
  </v-container>
</template>
