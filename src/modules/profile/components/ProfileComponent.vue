<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { ProfileInsert, ProfileUpdate } from '../model'
import type { User } from '@supabase/supabase-js'

interface Props {
  profile: ProfileInsert
  user: User | any
  isLoading?: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<{
  updateProfile: [updates: typeof updates.value]
}>()
const { username, website, full_name } = toRefs(props.profile)
const { id, email } = toRefs(props.user)

const updates = ref<ProfileInsert>({
  id: id.value,
  updated_at: new Date().toISOString(),
  full_name: full_name?.value,
  website: website?.value,
  username: username?.value,
  avatar_url: '',
})

const handleUpdate = () => {
  emit('updateProfile', updates.value)
}

const profileInitials = (full_name: string | undefined | null) => {
  if (!full_name) {
    return 'AV'
  }
  const names = full_name.split(' ')
  const firstName = names[0].substring(0, 1)
  const lastName = names.pop()?.substring(0, 1)
  return `${firstName}${lastName}`
}
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <div
          v-if="full_name"
          class="text-h5 text-center"
        >
          {{ full_name }}
        </div>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        ><div class="text-subtitle text-center text-medium-emphasis">
          {{ email }}
        </div></v-col
      >
    </v-row>
    <v-row
      align="center"
      class="my-2"
      no-gutters
    >
      <v-col class="text-right"
        ><v-icon size="28">mdi-message-plus</v-icon></v-col
      >
      <v-col>
        <v-avatar
          class="mx-3"
          color="red"
          :size="120"
        >
          <span class="text-h3 text-center">{{
            profileInitials(full_name)
          }}</span>
        </v-avatar>
      </v-col>
      <v-col><v-icon size="28">mdi-message-plus</v-icon></v-col>
    </v-row>
    <v-divider></v-divider>
    <v-form
      class="my-3"
      :disabled="isLoading"
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
            :loading="isLoading"
            @click="handleUpdate"
            >Gravar</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
