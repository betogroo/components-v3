<script setup lang="ts">
import type { Budget, ItemPurchase } from '../model'
import useUpdateField from '@/shared/composables/useUpdateField'
import getCollection from '@/shared/composables/getCollection'
// import useDate from '@/shared/composables/useDate'

interface Props {
  purchase_id: string
}
const props = defineProps<Props>()

const { documents } = await getCollection<ItemPurchase>(
  'purchase_item',
  'price',
  'purchase_id',
  props.purchase_id,
)

const { updateArray, isLoading } = useUpdateField('purchase_item', 'budget')

const _budget: Budget = {
  link: 'link para a parada da parada',
  price: 25.65,
  print: 'aqui é um print para a parada a parada feita pela coisa',
}
const handleClick = (id: string) => {
  updateArray(_budget, id)
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
      </div>
      <div v-else>
        <div>
          Produto {{ item.id }} produto tem {{ item.budget.length }} orçamentos
        </div>
        <v-list
          density="compact"
          lines="one"
        >
          <v-list-item
            v-for="budget in item.budget"
            :key="budget.link"
            density="compact"
          >
            {{ budget.link }} - {{ budget.price }} {{ budget.print }}
          </v-list-item>
        </v-list>
      </div>
      <v-btn
        v-bind:loading="isLoading"
        @click="handleClick(item.id!)"
        >Add</v-btn
      >
    </v-card>
  </v-card>
</template>
