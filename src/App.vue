<template>
  <!-- valeur interpréte d'un attribut -->
  <h1 :id="`p-${count}`" :style="{ color: count > 5 ? 'red' : 'green' }">
    Compteur : {{ count }}
  </h1>
  <button @click="incrementer">Incrémenter</button>
  <button @click="decrementer">Décrémenter</button>

  <div v-if="count > 3">
    <p>Vous avez cliqué plus 3 fois</p>
  </div>

  <div v-else="count > 3">
    <p>Vous avez cliqué moins de 3 fois</p>
  </div>

  <hr />
  <button @click="sortMovies">Réorganiser</button>
  <form action="" @submit.prevent="addMovie">
    <input type="text" placeholder="Nouveau Film" v-model="movieName" />
    {{ movieName }}
    <button>Ajouter</button>
  </form>
  <!-- afficher liste des films -->
  <ul>
    <li v-for="movie in movies" :key="movie">
      {{ movie }}
      <button @click="deleteMovie(movie)">Supprimer</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const incrementer = () => {
  console.log("count", count);
  count.value++;
};

const decrementer = (e) => {
  console.log("e", e);
  count.value--;
};

//films
const movies = ref([
  "Servante Ecarlate",
  "Black List",
  "Expanse",
  "Matrix",
  "Titanic",
]);

const deleteMovie = (movie) => {
  movies.value = movies.value.filter((m) => m != movie);
};

//trier les films
const sortMovies = () => {
  movies.value.sort((a, b) => (a > b ? 1 : -1));
};

//add new moovie
const movieName = ref("");
const addMovie = () => {
  // e.preventDefault()
  movies.value.push(movieName.value);
  movieName.value = "";
};
</script>

<style>
/* h1 {
  color: red;
} */
</style>
