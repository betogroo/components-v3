<script setup lang="ts">
import useCounter from '@/modules/counter/composables/useCounter'

interface Props {
  initialValue?: number | string
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  initialValue: 0,
  title: ''
})

const { counter, increaseValue, decreaseValue, resetCounter } = useCounter(
  Number(props.initialValue)
)
</script>

<template>
  <v-card
    class="pa-3"
    width="400"
  >
    <v-card-title>{{ title }}</v-card-title>
    <h1 class="text-h1 text-center">{{ counter }}</h1>
    <div class="mb-4 d-flex justify-space-between">
      <v-btn
        color="red"
        :disabled="counter === 0"
        min-width="174"
        @click="decreaseValue"
        ><v-icon>mdi-minus-thick</v-icon></v-btn
      >
      <v-btn
        color="blue"
        min-width="174"
        @click="increaseValue"
        ><v-icon>mdi-plus-thick</v-icon></v-btn
      >
    </div>
    <v-btn
      block
      color="error"
      :disabled="counter === 0"
      @click="resetCounter"
      >Reset</v-btn
    >
  </v-card>
</template>
