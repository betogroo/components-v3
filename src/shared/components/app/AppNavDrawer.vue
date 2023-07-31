<script setup lang="ts">
/* import { ref, watchEffect } from 'vue'
interface Props {
  drawer: boolean
}
const props = withDefaults(defineProps<Props>(), {
  drawer: false,
}) */

/* const drawer = ref(props.drawer)
watchEffect(() => {
  drawer.value = props.drawer
}) */
const drawer = defineModel<boolean>()
</script>

<template>
  <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
</template>
