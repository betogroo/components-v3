<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { ProfileInsert } from '../model'
import { User } from '@/plugins/supabase'

interface Props {
  isPending: boolean
  profile: ProfileInsert
  id?: User['id']
}
const props = withDefaults(defineProps<Props>(), {
  isPending: false,
})
const emit = defineEmits<{
  updateProfile: [updates: ProfileInsert]
}>()
const { username, website, full_name } = toRefs(props.profile)

const updates = ref<ProfileInsert>({
  id: props.id!,
  updated_at: new Date().toISOString(),
  full_name: full_name?.value,
  website: website?.value,
  username: username?.value,
  avatar_url: '',
})

const handleUpdate = () => {
  emit('updateProfile', updates.value)
}
</script>

<template>
  <v-form
    class="my-3"
    :disabled="isPending"
  >
    <div class="text-h6">Complete ou atualize seus dados</div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="updates.full_name"
          label="Nome Completo"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="updates.website"
          label="Seu site"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="updates.username"
          label="Username"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-right">
        <v-btn
          :color="isPending ? 'red' : 'success'"
          :loading="isPending"
          @click="handleUpdate"
          >Gravar</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
