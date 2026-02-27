<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <button class="bonjour">Bonjour</button>
  </div>
</template>

<script setup>
// Rien ici pour l'instant
</script>

<style scoped>
h2,
p {
  color: black;
}
.sidebar {
  flex: 1;
  padding: 20px;
  background: #f7947c;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.bonjour {
  margin-top: 15px;
  padding: 10px;
  background: #dee2e6;
  border-radius: 4px;
  text-align: center;
}

.sidebar button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* .sidebar button:hover {
  background: #1b0a20;
} */
</style>
