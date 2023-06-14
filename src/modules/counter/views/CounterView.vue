<script setup lang="ts">
import CounterView from '../components/CounterView.vue'
</script>

<template>
  <v-container class="fill-height d-flex justify-center">
    <CounterView title="Homens" :initial-value="10" />
    <CounterView title="Mulheres" />
  </v-container>
</template>
