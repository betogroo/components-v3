<script setup lang="ts">
import { ref } from 'vue'
import type { ItemPurchase } from '../model'
import addDocument from '@/shared/composables/addDocument'
interface Props {
  purchase_id: string
}
const props = defineProps<Props>()
const formValues = ref<ItemPurchase>({
  purchase_id: props.purchase_id,
  tittle: '',
  siafisico: '',
  expenseQuality: '',
  unity: '',
  quantity: 0,
  price: 0,
})

const { addDocument: addPurchaseItem } = addDocument(
  'purchase_item',
  formValues.value,
)

const handleSubmit = async () => {
  await addPurchaseItem()
  console.log(
    formValues.value,
    formValues.value.price * formValues.value.quantity,
  )
}
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row>
      <v-col
        ><v-text-field
          v-model="formValues.tittle"
          density="compact"
          hint="Digite o nome do material, de modo amigável"
          label="Material"
          variant="outlined"
      /></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="formValues.siafisico"
          density="compact"
          hint="Digite o número do Item Siafísico"
          label="Item Siafísico"
          variant="outlined"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="formValues.expenseQuality"
          density="compact"
          hint="Digite o número da Natureza da Despesa"
          label="Natureza da Despesa"
          variant="outlined"
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
          variant="outlined"
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
          variant="outlined"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model.number="formValues.price"
          density="compact"
          label="Valor Unitário"
          type="number"
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col><v-btn type="submit">Adicionar</v-btn></v-col>
    </v-row>
  </v-form>
</template>
