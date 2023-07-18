<script setup lang="ts">
import { ref } from 'vue'
import { Purchase } from '../model'
import { Timestamp } from '@/shared/model/Firebase.interfaces'

const emit = defineEmits(['submit-form'])

const purchase = ref<Purchase>({
  innerProcess: Number(''),
  createdAt: Timestamp.fromDate(new Date()),
  type: '',
  description: '',
  outerProcess: '',
})

const handleSubmit = () => {
  emit('submit-form', purchase.value)
}
</script>

<template>
  <v-form
    class="pa-1 ma-1"
    @submit.prevent="handleSubmit"
  >
    <v-text-field
      v-model.number="purchase.innerProcess"
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
</template>
