<script setup lang="ts">
import { ItemPurchase } from '../model'

interface Props {
  item: ItemPurchase
}
defineProps<Props>()

const handleClick = () => {
  console.log('handle-click')
}
</script>

<template>
  <v-list-item
    class="px-0"
    density="compact"
  >
    <v-list-item-title>{{ item.tittle }}</v-list-item-title>
    <v-list-item-subtitle>
      <v-row
        align="center"
        no-gutters
      >
        <v-col>Quantidade</v-col>
        <v-col>2 unidades</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>Valor Unitário</v-col>
        <v-col>R$20,55</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>Valor Total</v-col>
        <v-col>R$41,10</v-col>
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
      ></v-btn>
    </template>
  </v-list-item>
</template>

<style lang="scss" scoped>
.v-list-item__prepend {
  align-self: center;
}
</style>
