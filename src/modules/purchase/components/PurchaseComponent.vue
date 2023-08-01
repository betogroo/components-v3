<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import type { Purchase } from '../model'
import { PurchaseHead, PurchaseDetails } from '../components'
import { AppIconBtn } from '@/shared/components'
import { ref, toRefs } from 'vue'
const props = defineProps<Props>()
const emit = defineEmits(['toggleForm'])
interface Props {
  id: string
  countRecords: number
}
const { id, countRecords } = toRefs(props)

const itemsCounts = (count: number): string => {
  let text: string
  switch (count) {
    case 0:
      text = 'Não há produtos cadastrados'
      break
    case 1:
      text = 'Há 1 produto cadastrado'
      break
    default:
      text = `Há ${count} produtos cadastrados`
      break
  }
  return text
}
const { document: purchase, error } = await getDocument<Purchase>(
  'purchase',
  id.value,
)
const toggleBtn = ref(false)
const toggleForm = async () => {
  toggleBtn.value = !toggleBtn.value
  emit('toggleForm')
}
</script>

<template>
  <div v-if="purchase">
    <PurchaseHead :purchase="purchase" />
    <v-divider
      class="mb-2"
      :thickness="2"
    ></v-divider>
    <PurchaseDetails
      inner-process-title="Processo SEI"
      :purchase="purchase"
    />
    <v-divider></v-divider>
    <h1 class="text-subtitle-1 ml-3">Produtos</h1>
    <div class="d-flex align-center">
      <div>{{ itemsCounts(countRecords) }}</div>
      <AppIconBtn
        :toggle-btn="toggleBtn"
        tooltip-title="Adicionar produto"
        @handle-click="toggleForm"
      />
    </div>
  </div>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
