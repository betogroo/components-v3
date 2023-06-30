<script setup lang="ts">
import { ref } from 'vue'

const processNumber = ref<number>()
const type = ref<string>('')
const description = ref<string>('')
const handleSubmit = () => {
  console.log(processNumber.value, type.value, description.value)
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
          v-model="processNumber"
          label="Processo Interno"
          suffix="/2023"
          type="number"
          variant="outlined"
        />
        <v-radio-group
          v-model="type"
          inline
          label="Tipo de Aquisição"
        >
          <v-radio
            label="Material Permanente"
            value="P"
          ></v-radio>
          <v-radio
            label="Material de Consumo"
            value="C"
          ></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="description"
          label="Descrição"
          variant="outlined"
        />

        <v-btn type="submit">Gravar</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
