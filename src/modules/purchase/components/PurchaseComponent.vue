<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import type { Purchase } from '../model'
import useDate from '@/shared/composables/useDate'
const props = defineProps<Props>()
const { document: purchase, error } = await getDocument<Purchase>(
  'buy',
  props.id,
)
const { timestampToDate, timestampToYear } = useDate()
interface Props {
  id: string
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
  </v-card>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
