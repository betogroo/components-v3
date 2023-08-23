<script setup lang="ts">
// types
import { Purchase } from '../model'

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
    <div>
      <v-row>
        <v-col>
          <h5 class="font-weight-regular">Produtos Cadastrados: [0]</h5>
        </v-col>
        <v-col>
          <h5 class="font-weight-regular">Valor total: [R$56,25]</h5>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
