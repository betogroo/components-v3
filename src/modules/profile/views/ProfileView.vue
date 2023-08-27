<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useProfile } from '../composable'
const { getProfile, updateProfile, profile, user, isSuccess, isPending } =
  useProfile()

await getProfile()

const email = ref(user.value?.email)
const username = ref(profile.value.username)
const website = ref(profile.value.website)
const full_name = ref(profile.value.full_name)
const handleUpdate = async () => {
  const updates = {
    id: user.value!.id,
    username: username.value,
    website: website.value,
    full_name: full_name.value,
  }
  await updateProfile(updates)
}
</script>

<template>
  <div>Profile</div>
  <v-text-field
    v-model.value="email"
    disabled
    label="Email"
    variant="filled"
  />
  <v-text-field
    v-model.value="full_name"
    label="Nome Completo"
  />
  <v-text-field
    v-model="username"
    label="Username"
  />
  <v-text-field
    v-model="website"
    label="Site"
  />
  <v-btn
    :loading="isPending"
    @click="handleUpdate"
    >Gravar</v-btn
  >
  <v-alert
    v-if="isSuccess"
    type="success"
    >{{ isSuccess }}</v-alert
  >
</template>
