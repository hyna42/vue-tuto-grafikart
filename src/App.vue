<!-- LES WATCHERS -->

<template>
  <div v-if="state === 'error'">Impossible de charger les données</div>
  <div :aria-busy="state === 'loading'">
    <!-- {{ quiz }} -->
    <Quiz :quiz="quiz" v-if="quiz" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Quiz from "./components/Quiz.vue";

const quiz = ref(null);
const state = ref("loading");
onMounted(() => {
  fetch("http://localhost:5173/public/quiz.json")
    .then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error("Impossible de récupérer les données");
    })
    .then((data) => {
      quiz.value = data;
      state.value = "idle";
    })
    .catch((e) => {
      state.value = "error";
    });
});
</script>

<style></style>
