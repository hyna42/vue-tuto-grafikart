<template>
  <button @click="toggleSpoiler">Afficher / Masquer le spoiler</button>
  <Transition>
    <div v-if="showSpoiler" class="spoiler">
      A la fin de la série Marc Cunningan meurt !
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const showSpoiler = ref(false);

const toggleSpoiler = () => (showSpoiler.value = !showSpoiler.value);
</script>

<style scoped>
.spoiler {
  padding: 1rem;
  border: 1px solid #ffffff58;
  transition: 0.5s;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
