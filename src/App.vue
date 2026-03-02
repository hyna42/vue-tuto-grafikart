<template>
  <div class="app" :class="{ dark: storeTheme.isDark }">
    <!-- Navigation -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/login" v-if="store.user === null" class="btn-login">
        Se connecter
      </router-link>
      <span v-else>{{ store.user.username }}</span>
    </nav>

    <!-- Page actuelle -->
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Footer from './pages/Footer.vue'
import { useAuth } from './store/auth'
import { useTheme } from './store/them'

const store = useAuth()
const storeTheme = useTheme()
</script>

<style scoped>

.app {
  background: white;
  color: #333;
  transition: background 0.3s, color 0.3s;
  min-height: 100vh;
}

.app.dark {
  background: #f863fd;
  color: white;
}

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
  transition: background 0.3s;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.1);
}

nav a.router-link-active {
  background: #0ea5e9;
}

.btn-login {
  background: #0ea5e9 !important;
  color: white;
  padding: 0.5rem 1rem;
  margin-left: auto;
}

.btn-login:hover {
  background: #0284c7 !important;
}
</style>