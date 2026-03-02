<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>À propos</h3>
        <p>Une plateforme moderne pour explorer et apprendre.</p>
      </div>

      <div class="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <p>Email: info@example.com</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Mon Site. Tous droits réservés.</p>
    </div>

    <div class="footer-theme">
      <button @click="storeTheme.swithTheme" class="btn-theme">
        {{ storeTheme.isDark ? "☀️ Light" : "🌙 Dark" }} Theme
      </button>
    </div>
  </footer>
</template>

<script setup>
import { useTheme } from "@/store/them";

const storeTheme = useTheme();
</script>

<style scoped>
.footer {
  background: #333;
  color: white;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: #0ea5e9;
}

.footer-section p {
  line-height: 1.6;
  color: #ccc;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #0ea5e9;
}

.footer-bottom {
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #555;
  color: #999;
}

.footer-theme {
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  border-top: 1px solid #555;
}

.btn-theme {
  background: #222;
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid #555;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-theme:hover {
  background: #444;
  border-color: #0ea5e9;
}
</style>
