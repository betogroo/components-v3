<template>
  <v-container class="fill-height text-center">
    <v-responsive>
      <h1>Counter</h1>
      <h2>{{ counter }}</h2>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      counter: 1
    }
  }
})
</script>
