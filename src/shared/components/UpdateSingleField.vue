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
  props.id,
  props.field,
)
const handleClick = async () => {
  await updateField(field.value)
}
</script>

<template>
  <v-row>
    <v-col>
      <v-text-field
        v-model="field"
        :label="label"
        variant="outlined"
      />
    </v-col>
    <v-col>
      <v-btn @click="handleClick">Salvar</v-btn>
    </v-col>
  </v-row>
</template>
