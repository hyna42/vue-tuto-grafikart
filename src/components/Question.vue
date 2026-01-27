<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
    <ul>
      <li v-for="(choice, index) in randomChoices" :key="choice">
        <Answer
          :id="`answer${index}`"
          :disabled="!hasAnswer"
          v-model="answer"
          :value="choice"
          @change="onAnswer"
          :correctAnswer="question.correct_answer"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { shuffleArray } from "@/functions/array";
import { computed, onMounted, onUnmounted, ref } from "vue";
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

//use timer for pass automatically in new quesiton after 5 secondes
let timer;

const onAnswer = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    emits("answer", answer.value);
  },2_000)
}



onMounted(() => {
  timer = setTimeout(() => {
    // emits("answer", answer.value);
    answer.value = ''
    onAnswer()
  }, 2_000);
});

onUnmounted(() => {
  clearTimeout(timer);
});

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
