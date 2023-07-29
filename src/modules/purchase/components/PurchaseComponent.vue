<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import type { Purchase } from '../model'
import { PurchaseHead, PurchaseDetails } from '../components'
import { AppIconBtn } from '@/shared/components'
import { ref } from 'vue'
const props = defineProps<Props>()
const emit = defineEmits(['toggleForm'])
const { document: purchase, error } = await getDocument<Purchase>(
  'purchase',
  props.id,
)
interface Props {
  id: string
  countRecords: number
}

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
      <div>{{ countRecords }} produtos cadastrados</div>
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
