<template>
  <slot></slot>
</template>

<script setup>
import { provide, ref } from "vue";
const darkMode = ref(true)
provide("darkMode", darkMode);
console.log(":::",darkMode.value)
</script>
