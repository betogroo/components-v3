<script setup lang="ts">
import useUpdateField from '@/shared/composables/useUpdateField'
import { toRefs } from 'vue'
const props = defineProps<Props>()
interface Props {
  id: string
  collection: string
  field: string
  label: string
}
const { collection, field, id, label } = toRefs(props)
const { updateField, formValue } = useUpdateField(collection.value, field.value)
const handleClick = async () => {
  await updateField(formValue.value, id.value).then(() => {
    formValue.value = ''
  })
}
</script>

<template>
  <v-row align="center">
    <v-col>
      <v-text-field
        v-model="formValue"
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
