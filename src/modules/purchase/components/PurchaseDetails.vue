<script setup lang="ts">
import { Purchase } from '../model'
import { UpdateSingleField } from '@/shared/components'

interface Props {
  purchase: Purchase
  innerProcessTitle: string
}
defineProps<Props>()
</script>

<template>
  <h2 class="text-subtitle-1 ml-3">Detalhes do Processo</h2>
  <div class="my-2">
    <div v-if="purchase.outerProcess">
      <h5 class="font-weight-regular">
        {{ innerProcessTitle }}: {{ purchase.outerProcess }}
      </h5>
    </div>
    <div v-else>
      <UpdateSingleField
        :id="purchase.id!"
        collection="purchase"
        field="outerProcess"
        label="Processo SEI"
      />
    </div>
    <div>
      <v-row>
        <v-col>
          <h5 class="font-weight-regular">Produtos Cadastrados: [3]</h5>
        </v-col>
        <v-col>
          <h5 class="font-weight-regular">Valor total: [R$56,25]</h5>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
