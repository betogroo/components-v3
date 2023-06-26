<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Components</v-app-bar-title>
    <div>
      <v-btn :to="{ name: 'HomeView' }">Home</v-btn>
      <v-btn :to="{ name: 'CounterView' }">Counter</v-btn>
      <v-btn :to="{ name: 'AboutView' }">About</v-btn>
      <v-btn :to="{ name: 'LoginView' }">Login</v-btn>
      <v-btn :to="{ name: 'SignupView' }">Signup</v-btn>
    </div>
  </v-app-bar>
</template>
