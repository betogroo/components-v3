<script setup lang="ts">
import { ProfileComponent } from '../components'
import { useProfile } from '../composable'
import type { ProfileInsert } from '../model'

const { getProfile, updateProfile, profile, user, error, isPending } =
  useProfile()

await getProfile()
const handleUpdate = async (updates: ProfileInsert) => {
  await updateProfile(updates)
}
</script>

<template>
  <ProfileComponent
    :is-loading="isPending"
    :profile="profile"
    :user="user"
    @update-profile="(n) => handleUpdate(n)"
  />
  <v-alert
    v-if="error"
    type="error"
    >{{ error }}</v-alert
  >
</template>
