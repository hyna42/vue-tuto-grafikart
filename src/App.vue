<template>
  <div class="app">
    <div class="container">
      <!-- Article à gauche -->
      <div class="article">
        <h2>Article</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur voluptatum quos error optio, hic tempora illum voluptas quod vel numquam facere recusandae veniam? Earum assumenda iusto fuga? Laboriosam, architecto cum!</p>
        <button>Bouton</button>
      </div>

      <!-- Sidebar à droite -->
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
</script>

<style scoped>

.app {
  padding: 20px;
  font-family: sans-serif;
}

h2,p{
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
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.article button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.article button:hover {
  background: #0056b3;
}
</style>