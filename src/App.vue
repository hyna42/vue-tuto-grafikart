<template>
  <div class="app">
    <!-- Navigation -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <!-- Page actuelle -->
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
// route.path = l'URL actuelle
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #333;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

nav a.router-link-active {
  background: #0ea5e9;
}
</style>