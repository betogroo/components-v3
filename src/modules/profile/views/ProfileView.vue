<script setup lang="ts">
import { useProfile } from '../composable'
const { title } = useProfile()
</script>

<template>
  <div>{{ title }}</div>
</template>
