<script setup lang="ts">
import AppBackBtn from '@/shared/components/AppBackBtn.vue'
import PurchaseItemForm from '../components/PurchaseItemForm.vue'
import PurchaseItems from '../components/PurchaseItems.vue'
import AppLoader from '@/shared/components/AppLoader.vue'

interface Props {
  purchase_id: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-container>
    <PurchaseItemForm :purchase_id="props.purchase_id" />
    <Suspense>
      <template #default>
        <PurchaseItems :purchase_id="props.purchase_id" />
      </template>
      <template #fallback>
        <AppLoader />
      </template>
    </Suspense>
  </v-container>
  <AppBackBtn />
</template>
