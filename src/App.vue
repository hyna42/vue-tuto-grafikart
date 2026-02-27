<template>
  <div class="app">
    <div class="container">
      <!-- Article à gauche -->
      <div class="article">
        <h2>Article</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          voluptatum quos error optio, hic tempora illum voluptas quod vel
          numquam facere recusandae veniam? Earum assumenda iusto fuga?
          Laboriosam, architecto cum!
        </p>
        <Button>Bouton</Button>
      </div>

      <!-- Sidebar à droite -->
      <DarkMode>
        <Sidebar />
      </DarkMode>
    </div>
  </div>
</template>

<script setup>
import Button from "./components/Button.vue";
import Sidebar from "./Sidebar.vue";
import DarkMode from "./DarkMode.vue";

// provide("darkMode", false);
</script>

<style scoped>
.app {
  padding: 20px;
  font-family: sans-serif;
}

h2,
p {
  color: black;
}
.container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.article {
  flex: 2;
  padding: 20px;
  background: #e4e1e1;
  border-radius: 8px;
  border: 1px solid #ddd;
}
</style>
