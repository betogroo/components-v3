<script setup lang="ts">
import AppBackBtn from '@/shared/components/AppBackBtn.vue'
import PurchaseItemForm from '../components/PurchaseItemForm.vue'

interface Props {
  id: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-container>
    <PurchaseItemForm :purchase_id="props.id" />
  </v-container>
  <AppBackBtn />
</template>
