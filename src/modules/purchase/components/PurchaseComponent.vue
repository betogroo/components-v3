<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
//#
import { db } from '@/plugins/firebase'
import { doc, updateDoc } from 'firebase/firestore'
// #
import type { Purchase } from '../model'
import useDate from '@/shared/composables/useDate'
import { ref } from 'vue'
const props = defineProps<Props>()
const { document: purchase, error } = await getDocument<Purchase>(
  'buy',
  props.id,
)
const { timestampToDate, timestampToYear } = useDate()
interface Props {
  id: string
}

// ##
const outerProcess = ref('')
const documentReference = doc(db, 'buy', props.id)
const handleClick = async () => {
  console.log(outerProcess.value, documentReference)
  await updateDoc(documentReference, { outerProcess: outerProcess.value })
}
</script>

<template>
  <v-card class="mx-1 pa-1">
    <v-row v-if="purchase">
      <v-col cols="10"
        ><div class="pa-2">
          <span>
            Processo DSPSJB {{ purchase.innerProcess }}/{{
              timestampToYear(purchase.date)
            }}
          </span>
          -
          <span class="text-subtitle-2">{{ purchase.description }}</span>
        </div>
      </v-col>
      <v-col
        ><div class="text-subtitle-1 text-right">
          {{ timestampToDate(purchase.date) }}
        </div></v-col
      >
    </v-row>
    <v-row>
      <v-col v-if="purchase?.outerProcess">
        <span>Processo SEI: {{ purchase?.outerProcess }}</span></v-col
      >
      <v-col v-else>
        <v-text-field
          v-model="outerProcess"
          variant="outlined"
        />
        <v-btn @click="handleClick">Salvar</v-btn>
      </v-col>
    </v-row>
  </v-card>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
