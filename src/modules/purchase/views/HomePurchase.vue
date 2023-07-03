<script setup lang="ts">
import usePurchase from '../composables/usePurchase'
import getCollection from '../composables/getCollection'
const { purchases } = usePurchase()
const { documents: purchases2 } = getCollection('buy')
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <h1>buy</h1>
    <h6>
      {{ purchases }}
    </h6>
    <h6>
      {{ purchases2 }}
    </h6>
    <br />
    <RouterLink :to="{ name: 'NewPurchase' }">Nova Compra</RouterLink>
  </v-container>
</template>
