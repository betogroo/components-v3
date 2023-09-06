<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  isPending: boolean
}
withDefaults(defineProps<Props>(), {
  isPending: false,
})

const emit = defineEmits<{
  'submit-form': [data: PurchaseItemInsert]
}>()

//composables
import { useDisplay } from 'vuetify'

//types
import type { PurchaseItemInsert } from '../model'

const { mobile } = useDisplay()
const formValues = ref<PurchaseItemInsert>({})

const handleSubmit = async () => {
  emit('submit-form', formValues.value)
}
</script>

<template>
  <v-sheet max-width="600">
    <v-form
      :disabled="isPending"
      @submit.prevent="handleSubmit"
    >
      <v-row>
        <v-col class="ma-0"
          ><v-text-field
            v-model="formValues.title"
            label="Material"
        /></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formValues.siafisico"
            label="Item Siafísico"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="formValues.expenseQuality"
            label="Natureza da Despesa"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model.number="formValues.unity"
            clearable
            :items="[1, 10, 408, 302, 187]"
            label="Unidade de Fornecimento"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="formValues.quantity"
            label="Quantidade"
            type="number"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="formValues.price"
            label="Valor Unitário"
            type="number"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-right"
          ><v-btn
            :block="mobile"
            color="success"
            :loading="isPending"
            type="submit"
            >Adicionar</v-btn
          ></v-col
        >
      </v-row>
    </v-form>
  </v-sheet>
</template>
