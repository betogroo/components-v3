<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template><v-btn @click="router.back()">Voltar</v-btn></template>
