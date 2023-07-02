<script setup lang="ts">
import useBuy from '../composables/useBuy'
import getCollection from '../composables/getCollection'
const { purchases } = useBuy()
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
    <RouterLink :to="{ name: 'NewBuy' }">Nova Compra</RouterLink>
  </v-container>
</template>
