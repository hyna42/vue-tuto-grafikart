<template>
  <div class="container">
    <h1>{{ quiz.title }}</h1>
    <Progress :value="step" :max="quiz.questions.length - 1" />
    <Question
    :key="step"
      :question="question"
      v-if="state === 'question'"
      @answer="addAnswer"
    />
    <Recap v-if="state === 'recap'" />
  </div>
  {{ answers }}
</template>

<script setup>
import { computed, ref, watch } from "vue";
import Progress from "./Progress.vue";
import Question from "./Question.vue";
import Recap from "./Recap.vue";

const props = defineProps({
  quiz: Object,
});

//step
const step = ref(0);

//retrive step's question -> reactive value === computed way
const question = computed(() => props.quiz.questions[step.value]);

//store responses
const answers = ref(props.quiz.questions.map(() => null));

//mémoriser l'étape du quiz : mode quesiton ou mode récap
const state = ref("question");

//détecter quand l'utilisateur a répondu et ajouter la réponse dans le tableau
const addAnswer = (userAnswer) => {
  answers.value[step.value] = userAnswer; //mémorise la réponse
  if (step.value === props.quiz.questions.length - 1) {
    state.value = "recap";
  } else {
    step.value++; //aller à la step suivante
  }
};


</script>

<style>
.container {
  margin-top: 2rem;
}
</style>

<!-- incrémenter étapes
memoriser les réponses de l'utilisateur -->
