<!-- LES WATCHERS -->

<template>
  <input type="text" v-model="page.title" />
  Temps écoulé : {{ time }}
  <button @click="reset">Rest</button>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useTimer } from "./composable/useTimer";

const page = ref({
  title: "",
});

watchEffect(() => {
  document.title = page.value.title;
});

//creer une fonction qui va permettre d'avoir un timer
const {time, reset} = useTimer();
</script>

<style></style>
