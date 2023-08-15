<script setup lang="ts">
import { ref } from 'vue'

//composables
import { useDisplay } from 'vuetify'

//types
import type { PurchaseInsert } from '../model'
const emit = defineEmits<{
  'submit-form': [data: PurchaseInsert]
}>()

const purchase = ref<PurchaseInsert>({
  //id: null,
  //innerProcess: Number(''),
  createdAt: '',
  description: '',
  outerProcess: '',
  purchaseTypeId: '',
})

const { mobile } = useDisplay()
const handleSubmit = () => {
  emit('submit-form', purchase.value)
}
</script>

<template>
  <v-form
    class="pa-1 ma-1"
    @submit.prevent="handleSubmit"
  >
    <v-row>
      <v-col>
        <v-text-field
          v-model.number="purchase.innerProcess"
          label="Processo Interno"
          suffix="/2023"
          type="number"
          variant="outlined"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="purchase.outerProcess"
          label="Processo SEI"
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-radio-group
      v-model="purchase.purchaseTypeId"
      class="my-2 border"
      density="comfortable"
      hide-details
      label="Tipo de Material"
    >
      <v-row>
        <v-col>
          <v-radio
            class="text-center"
            label="Permanente"
            value="d65c7bfb-ffb4-47b5-8fe2-1c6d05214e8c"
          ></v-radio>
        </v-col>
        <v-col>
          <v-radio
            class="text-center"
            label="Consumo"
            value="46f1c5b2-8438-4a87-8c34-cce54e2e67cf"
          ></v-radio>
        </v-col>
      </v-row>
    </v-radio-group>
    <v-row>
      <v-col>
        <v-text-field
          v-model="purchase.description"
          label="Descrição"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-right">
        <v-btn
          :block="mobile"
          color="success"
          type="submit"
          >Gravar</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
