<script setup lang="ts">
interface Props {
  tooltipTitle?: string
  toggleBtn?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  tooltipTitle: 'Tooltip',
  toggleBtn: false,
})

const emit = defineEmits(['handleClick'])
const handleClick = () => {
  emit('handleClick')
}
</script>

<template>
  <v-btn
    icon
    variant="text"
    @click="handleClick"
  >
    <v-icon :icon="!toggleBtn ? 'mdi-plus-thick' : 'mdi-minus-thick'" />
    <v-tooltip
      activator="parent"
      location="top"
      open-delay="200"
      >{{ tooltipTitle }}</v-tooltip
    >
  </v-btn>
</template>
