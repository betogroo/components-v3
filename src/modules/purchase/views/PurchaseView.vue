<script setup lang="ts">
import PurchaseComponent from '../components/PurchaseComponent.vue'
import AppBackBtn from '@/shared/components/AppBackBtn.vue'
const props = defineProps<Props>()
interface Props {
  id: string
}
</script>

<template>
  <v-container>
    <Suspense>
      <!-- component with nested async dependencies -->
      <PurchaseComponent :id="props.id" />
      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
    <RouterLink :to="{ name: 'PurchaseItems', params: { id: props.id } }"
      >Ver Items</RouterLink
    >
    <AppBackBtn />
  </v-container>
</template>
