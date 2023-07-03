<script setup lang="ts">
import { reactive } from 'vue'
import usePurchase from '../composables/usePurchase'
import type { Purchase } from '../model'
const purchase = reactive<Purchase>({
  innerProcess: Number(''),
  date: new Date(),
  type: '',
  description: '',
})

/* const innerProcess = ref('')
const type = ref('')
const description = ref('')
// const date = ref(new Date())
const purchase = {
  innerProcess: Number(innerProcess.value),
  type: type.value,
  description: description.value,
  date: new Date(),
} */
const { addPurchase } = usePurchase()
const handleSubmit = () => {
  addPurchase(purchase)
}
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <v-card class="fill-height w-100">
      <v-card-title>Nova Compra</v-card-title>
      <v-form
        class="pa-1 ma-1"
        @submit.prevent="handleSubmit"
      >
        <v-text-field
          v-model="purchase.innerProcess"
          label="Processo Interno"
          suffix="/2023"
          type="number"
          variant="outlined"
        />
        <v-radio-group
          v-model="purchase.type"
          inline
          label="Tipo de Aquisição"
        >
          <v-radio
            label="Material Permanente"
            value="p"
          ></v-radio>
          <v-radio
            label="Material de Consumo"
            value="c"
          ></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="purchase.description"
          label="Descrição"
          variant="outlined"
        />

        <v-btn type="submit">Gravar</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
