<!-- LES WATCHERS -->

<template>
  <input type="text" v-model="page.title" />
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const page = ref({
  title:''
});

// watch(
//   name,
//   (newValue, oldvalue) => {
//     document.title = newValue;
//   },
//   { immediate: true },
// );
watchEffect(() => {
  document.title = page.value.title
})
</script>

<style></style>
