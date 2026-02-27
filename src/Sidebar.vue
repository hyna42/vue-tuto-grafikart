<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <Button @click="toggleDarkMode">Bonjour</Button>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Button from "./components/Button.vue";

// Rien ici pour l'instant

const darkMode = inject("darkMode");
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  console.log(":::",darkMode.value)
};
</script>

<style scoped>
h2,
p {
  color: rgb(243, 238, 238);
}
.sidebar {
  flex: 1;
  padding: 20px;
  background: #242322;
  border-radius: 8px;
  border: 2px solid #f3efef;
}

.bonjour {
  margin-top: 15px;
  padding: 10px;
  background: #19191a;
  border-radius: 4px;
  text-align: center;
}
</style>
