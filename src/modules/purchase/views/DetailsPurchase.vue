<script setup lang="ts">
interface Props {
  id: string
}
const props = defineProps<Props>()
</script>

<template>
  <div>{{ props.id }}</div>
</template>
