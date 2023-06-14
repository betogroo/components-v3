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
  <v-card width="400" class="pa-3">
    <v-card-title>{{ title }}</v-card-title>
    <h1 class="text-h1 text-center">{{ counter }}</h1>
    <div class="mb-4 d-flex justify-space-between">
      <v-btn
        :disabled="counter === 0"
        min-width="174"
        @click="decreaseValue"
        color="red"
        ><v-icon>mdi-minus-thick</v-icon></v-btn
      >
      <v-btn min-width="174" @click="increaseValue" color="blue"
        ><v-icon>mdi-plus-thick</v-icon></v-btn
      >
    </div>
    <v-btn :disabled="counter === 0" @click="resetCounter" color="error" block
      >Reset</v-btn
    >
  </v-card>
</template>
