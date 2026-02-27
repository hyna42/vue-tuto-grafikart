<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup>
import { computed, inject, unref } from "vue";

const props = defineProps({
  dark: Boolean,
});
const {darkMode} = inject('darkMode')

const classes = computed(() => ({
    btn: true,
    dark: props.dark || unref(darkMode),
}));

//inject darkMode
console.log('inject darkMode ==>',darkMode)
</script>

<style>
.btn {
  color: #fff;
  background-color: #680303;
  border: 1px solid #680303;
  padding: 0.5rem 1rem;
  font: inherit;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background: #03030e;
}

.dark {
  background-color: #060547;
  border-color: #0a0a0a;
}
</style>
