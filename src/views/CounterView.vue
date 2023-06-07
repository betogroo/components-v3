<template>
  <v-container class="fill-height d-flex justify-center">
    <v-card width="400" class="text-center pa-3">
      <h1 class="text-h1">{{ counter }}</h1>
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref(0)

    return { counter }
  },

  methods: {
    increaseValue() {
      this.counter++
    },
    decreaseValue() {
      this.counter--
    },
    resetCounter() {
      this.counter = 0
    }
  }
})
</script>
