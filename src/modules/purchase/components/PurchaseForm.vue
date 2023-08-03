<script setup lang="ts">
import { ref } from 'vue'

//composables
import { useDisplay } from 'vuetify'

//types
import { Timestamp } from '@/shared/model/Firebase.interfaces'
import type { Purchase } from '../model'
const emit = defineEmits<{
  'submit-form': [data: Purchase]
}>()

const purchase = ref<Purchase>({
  innerProcess: Number(''),
  createdAt: Timestamp.fromDate(new Date()),
  type: '',
  description: '',
  outerProcess: '',
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
      v-model="purchase.type"
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
            value="p"
          ></v-radio>
        </v-col>
        <v-col>
          <v-radio
            class="text-center"
            label="Consumo"
            value="c"
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
