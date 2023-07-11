<script setup lang="ts">
import AppBackBtn from '@/shared/components/AppBackBtn.vue'
import PurchaseItemForm from '../components/PurchaseItemForm.vue'
import PurchaseItems from '../components/PurchaseItems.vue'

interface Props {
  id: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-container>
    <PurchaseItemForm :purchase_id="props.id" />
    <Suspense>
      <template #default>
        <PurchaseItems />
      </template>
      <template #fallback>Loading... </template>
    </Suspense>
  </v-container>
  <AppBackBtn />
</template>
