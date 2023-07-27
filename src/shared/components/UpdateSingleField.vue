<script setup lang="ts">
import useUpdateField from '@/shared/composables/useUpdateField'
const props = defineProps<Props>()
interface Props {
  id: string
  collection: string
  field: string
  label: string
}

const { updateField, formValue: field } = useUpdateField(
  props.collection,
  props.field,
)
const handleClick = async () => {
  await updateField(field.value, props.id)
}
</script>

<template>
  <v-row align="center">
    <v-col>
      <v-text-field
        v-model="field"
        hide-details
        :label="label"
        variant="outlined"
      />
    </v-col>
    <v-col>
      <v-btn @click="handleClick">Salvar</v-btn>
    </v-col>
  </v-row>
</template>
