<script setup lang="ts">
import type { Budget, ItemPurchase } from '../model'
import useUpdateField from '@/shared/composables/useUpdateField'
import getCollection from '@/shared/composables/getCollection'
// import useDate from '@/shared/composables/useDate'

//const props = defineProps<Props>()
const { documents } = await getCollection<ItemPurchase>(
  'purchase_item',
  'price',
)

const { updateMap } = useUpdateField(
  'purchase_item',
  'dZux7HNFZMxD5c8DKnFj',
  'budget',
)

/* const budget: Budget = {
  link: 'link para a parada da parada',
  price: 25.65,
  print: 'aqui é um print para a parada a parada feita pela coisa',
} */
const handleClick = (id: string) => {
  updateMap(budget)
  console.log(budget, id)
}
</script>

<template>
  <v-card>
    <v-card
      v-for="item in documents"
      :key="item.id"
      class="pa-1 ma-1"
      variant="outlined"
    >
      <v-card-title>{{ item.tittle }}</v-card-title>
      <div v-if="!item.budget">
        <div>Ainda não tem orçamentos</div>
        <div><v-btn>Adicionar</v-btn></div>
      </div>
      <div v-else>
        <div>
          Produto {{ item.id }} produto tem {{ item.budget.length }} orçamentos
        </div>
        <div
          v-for="budget in item.budget"
          :key="budget.link"
        >
          {{ budget.link }} - {{ budget.price }} {{ budget.print }}
        </div>
      </div>
      <v-btn @click="handleClick(item.id!)">Add</v-btn>
    </v-card>
  </v-card>
</template>
