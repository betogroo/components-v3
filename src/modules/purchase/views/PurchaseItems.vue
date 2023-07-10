<script setup lang="ts">
import AppBackBtn from '@/shared/components/AppBackBtn.vue'

interface Props {
  id: string
}
const props = defineProps<Props>()
</script>

<template>
  <div>Home</div>
  <h3>Coisas da compra {{ props.id }}</h3>
  <AppBackBtn />
</template>
