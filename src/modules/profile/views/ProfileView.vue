<script setup lang="ts">
import { onMounted } from 'vue'
import { useProfile } from '../composable'
const { getProfile, profile } = useProfile()
onMounted(() => {
  getProfile()
})
</script>

<template>
  <div>Profile</div>

  {{ profile.username }}
</template>
