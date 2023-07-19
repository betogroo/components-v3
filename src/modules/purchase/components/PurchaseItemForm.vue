<script setup lang="ts">
import { ref } from 'vue'
import type { ItemPurchase } from '../model'
import { Timestamp } from '@/shared/model/Firebase.interfaces'
interface Props {
  purchase_id: string
}
const props = defineProps<Props>()
const emit = defineEmits(['submit-form'])
const formValues = ref<ItemPurchase>({
  purchase_id: props.purchase_id,
  tittle: '',
  siafisico: '',
  expenseQuality: '',
  unity: '',
  quantity: 0,
  price: 0,
  createdAt: Timestamp.fromDate(new Date()),
})

// const { addDocument: addPurchaseItem } = addDocument('purchase_item')

const handleSubmit = async () => {
  /* await addPurchaseItem(formValues.value).then(() => {
    emit('show-form')
  }) */
  emit('submit-form', formValues.value)
}
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row no-gutters>
      <v-col
        ><v-text-field
          v-model="formValues.tittle"
          density="compact"
          :hide-details="true"
          hint="Digite o nome do material, de modo amigável"
          label="Material"
      /></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="formValues.siafisico"
          density="compact"
          :hide-details="true"
          hint="Digite o número do Item Siafísico"
          label="Item Siafísico"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="formValues.expenseQuality"
          density="compact"
          hint="Digite o número da Natureza da Despesa"
          label="Natureza da Despesa"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="formValues.unity"
          clearable
          density="compact"
          :items="['1', '10', '408', '302', '187']"
          label="Unidade de Fornecimento"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model.number="formValues.quantity"
          density="compact"
          label="Quantidade"
          type="number"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model.number="formValues.price"
          density="compact"
          label="Valor Unitário"
          type="number"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col><v-btn type="submit">Adicionar</v-btn></v-col>
    </v-row>
  </v-form>
</template>
