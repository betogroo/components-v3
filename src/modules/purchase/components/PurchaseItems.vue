<script setup lang="ts">
//types
import { PurchaseItem } from '../model'

interface Props {
  item: PurchaseItem
}
defineProps<Props>()
const emit = defineEmits(['icon-click'])

const handleClick = () => {
  emit('icon-click')
}
</script>

<template>
  <v-list-item
    class="px-0"
    density="compact"
  >
    <v-list-item-title>{{ item.title }}</v-list-item-title>
    <v-list-item-subtitle>
      <v-row
        align="center"
        no-gutters
      >
        <v-col>Quantidade</v-col>
        <v-col>{{ item.quantity }} unidades</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>Valor Unitário</v-col>
        <v-col>R${{ item.price }}</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>Valor Total</v-col>
        <v-col>R${{ item.quantity! * item.price! }}</v-col>
      </v-row>
    </v-list-item-subtitle>
    <template v-slot:prepend>
      <v-icon class="mr-1">mdi-folder</v-icon>
    </template>

    <template v-slot:append>
      <v-btn
        color="grey-lighten-1"
        icon="mdi-information"
        variant="text"
        @click="handleClick"
      ></v-btn>
    </template>
  </v-list-item>
</template>

<style lang="scss" scoped>
.v-list-item__prepend {
  align-self: center;
}
</style>
