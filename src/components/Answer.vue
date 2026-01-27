<template>
  <label :for="id" :class="classes">
    <input
      type="radio"
      name="answer"
      :id="id"
      v-model="model"
      :value="value"
      :disabled="disabled"
    />
    {{ value }}
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  id: String,
  value: String,
  disabled: Boolean,
  correctAnswer: String,
});

const classes = computed(() => ({
  disabled: props.disabled,
  right: props.disabled && props.value === props.correctAnswer,
  wrong:
    props.disabled &&
    props.value !== props.correctAnswer &&
    model.value === props.value,
}));

const model = defineModel();
</script>

<style>
.disabled {
  opacity: 0.5;
}
.right {
  opacity: 1;
  color: green;
}
.wrong {
  opacity: 1;
  color: red;
}
</style>
