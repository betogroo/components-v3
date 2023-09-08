<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { ProfileInsert, Profile } from '../model'
import type { User } from '@supabase/supabase-js'

interface Props {
  full_name?: Profile['full_name']
  email: User['email']
  isPending?: boolean
}
defineProps<Props>()

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
      <v-col class="text-center">
        <v-avatar
          class="mx-3"
          color="red"
          :size="120"
        >
          <span class="text-h3">{{ profileInitials(full_name) }}</span>
        </v-avatar>
      </v-col>
      <v-col><v-icon size="28">mdi-message-plus</v-icon></v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>
