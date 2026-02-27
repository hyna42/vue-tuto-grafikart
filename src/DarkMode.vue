<template>
  <slot></slot>
</template>

<script setup>
import { provide, readonly, ref } from "vue";
const darkMode = ref(true);
// provide("darkMode", readonly(darkMode));
provide("darkMode", {
  darkMode: readonly(darkMode),
  toggleDarkMode: () => {darkMode.value = !darkMode.value},
});
console.log(":::", darkMode.value);
</script>
