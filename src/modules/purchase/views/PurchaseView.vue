<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { ItemPurchase } from '../model'
import {
  PurchaseComponent,
  PurchaseItemForm,
  PurchaseItems,
} from '../components'
import { addDocument, getCollection } from '@/shared/composables'
import AppBackBtn from '@/shared/components/AppBackBtn.vue'
interface Props {
  id: string
}

const props = defineProps<Props>()
const { id } = toRefs(props)
const { documents: purchaseItems, countRecords } = getCollection<ItemPurchase>(
  'purchase_item',
  'price',
  'purchase_id',
  id.value,
)

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
      v-if="itemFormVisible"
      :purchase_id="id"
      @submit-form="submitForm"
    />

    <v-list
      density="compact"
      lines="three"
      max-width="600"
    >
      <PurchaseItems
        v-for="item in purchaseItems"
        :key="item.id"
        :item="item"
        @show-form="showForm"
      />
    </v-list>
    <AppBackBtn />
  </v-container>
</template>
