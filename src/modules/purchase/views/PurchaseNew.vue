<script setup lang="ts">
import { reactive } from 'vue'
import addDocument from '@/shared/composables/addDocument'
import type { Purchase } from '../model'
import { Timestamp } from '@/shared/model'
const purchase = reactive<Purchase>({
  innerProcess: Number(''),
  date: Timestamp.fromDate(new Date()),
  type: '',
  description: '',
  outerProcess: '',
})

const { addDocument: addPurchase } = addDocument('purchase', purchase)
const handleSubmit = () => {
  addPurchase()
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
        <v-text-field
          v-model="purchase.outerProcess"
          label="Processo SEI"
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
