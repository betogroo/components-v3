<script setup lang="ts">
import PurchaseComponent from '../components/PurchaseComponent.vue'
import PurchaseItems from '../components/PurchaseItems.vue'
import PurchaseItemForm from '../components/PurchaseItemForm.vue'
import AppBackBtn from '@/shared/components/AppBackBtn.vue'
import { ref } from 'vue'
const props = defineProps<Props>()
interface Props {
  id: string
}

const itemFormVisible = ref(false)

const showForm = () => {
  itemFormVisible.value = !itemFormVisible.value
}
</script>

<template>
  <v-container>
    <Suspense>
      <!-- component with nested async dependencies -->
      <template #default>
        <PurchaseComponent :id="props.id" />
      </template>
      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
    <PurchaseItemForm
      v-if="itemFormVisible"
      :purchase_id="id"
      @show-form="showForm"
    />
    <PurchaseItems
      :purchase_id="id"
      @show-form="showForm"
    />
    <AppBackBtn />
  </v-container>
</template>
