<script setup lang="ts">
import useCounter from '@/modules/counter/composables/useCounter'
import { toRefs } from 'vue'

interface Props {
  initialValue?: number | string
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  initialValue: 0,
  title: '',
})
const { initialValue, title } = toRefs(props)
const { counter, increaseValue, decreaseValue, resetCounter } = useCounter(
  Number(initialValue.value),
)
</script>

<template>
  <v-card
    class="pa-3"
    width="400"
  >
    <v-card-title>{{ title }}</v-card-title>
    <h1 class="text-h1 text-center">{{ counter }}</h1>
    <div class="mb-4">
      <v-row>
        <v-col>
          <v-btn
            block
            color="red"
            :disabled="counter === 0"
            @click="decreaseValue"
            ><v-icon>mdi-minus-thick</v-icon></v-btn
          >
        </v-col>
        <v-col>
          <v-btn
            block
            color="blue"
            @click="increaseValue"
            ><v-icon>mdi-plus-thick</v-icon></v-btn
          >
        </v-col>
      </v-row>
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
