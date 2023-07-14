<script setup lang="ts">
import getDocument from '@/shared/composables/getDocument'
import UpdateSingleFieldVue from '@/shared/components/UpdateSingleField.vue'
import type { Purchase } from '../model'
import useDate from '@/shared/composables/useDate'
const props = defineProps<Props>()
const { document: purchase, error } = await getDocument<Purchase>(
  'purchase',
  props.id,
)
const { timestampToDate, timestampToYear } = useDate()
interface Props {
  id: string
}
</script>

<template>
  <v-card
    v-if="purchase"
    class="mx-1 pa-1"
  >
    <v-row>
      <v-col cols="10"
        ><div class="pa-2">
          <span>
            Processo DSPSJB {{ purchase.innerProcess }}/{{
              timestampToYear(purchase.createdAt)
            }}
          </span>
          -
          <span class="text-subtitle-2">{{ purchase.description }}</span>
        </div>
      </v-col>
      <v-col
        ><div class="text-subtitle-1 text-right">
          {{ timestampToDate(purchase.createdAt) }}
        </div></v-col
      >
    </v-row>
    <v-row>
      <v-col v-if="purchase.outerProcess">
        <span>Processo SEI: {{ purchase.outerProcess }}</span></v-col
      >
      <v-col v-else>
        <UpdateSingleFieldVue
          :id="$props.id"
          collection="purchase"
          field="outerProcess"
          label="Processo SEI"
        />
      </v-col>
    </v-row>
  </v-card>
  <v-alert
    v-if="error"
    type="error"
    >Erro Genérico</v-alert
  >
</template>
