<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
    <ul>
      <li v-for="(choice, index) in randomChoices" :key="choice">
        <Answer
          :id="`answer${index}`"
          :disabled="!hasAnswer"
          :value="choice"
          v-model="answer"
          :correctAnswer="question.correct_answer"
        />
      </li>
    </ul>
    <!-- communiquer la réponse au parent -->
    <button :disabled="hasAnswer" @click="emits('answer', answer)">
      Question suivante
    </button>
  </div>
</template>
<script setup>
import { shuffleArray } from "@/functions/array";
import { computed, ref } from "vue";
import Answer from "./Answer.vue";

const props = defineProps({
  question: Object,
});

const answer = ref(null);

const emits = defineEmits(["answer"]);
//if answered
const hasAnswer = computed(() => answer.value === null);

//random choices
const randomChoices = computed(() => shuffleArray(props.question.choices));
</script>

<style>
.question {
  padding-top: 2rem;
}

.question button {
  display: block;
  margin-left: auto;
}
</style>
