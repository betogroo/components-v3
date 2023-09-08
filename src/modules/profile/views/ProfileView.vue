<script setup lang="ts">
import { ProfileComponent, ProfileForm } from '../components'
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
    :email="user?.email"
    :full_name="profile.full_name"
    :is-pending="isPending"
  />
  <ProfileForm
    :id="user?.id"
    :is-pending="isPending"
    :profile="profile"
    @update-profile="(n) => handleUpdate(n)"
  />
  <v-alert
    v-if="error"
    type="error"
    >{{ error }}</v-alert
  >
</template>
