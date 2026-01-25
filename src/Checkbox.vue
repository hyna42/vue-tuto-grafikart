<template>
  <input type="checkbox" @change="onChange" v-model="model" />
  {{ label }}
</template>

<script setup>
const props = defineProps({
  label: String,
});

const emits = defineEmits(["check", "uncheck"]);

const model = defineModel();

const onChange = (event) => {
  if (event.currentTarget.checked) {
    emits("check", event.currentTarget);
  } else {
    emits("uncheck", event.currentTarget);
  }
};
console.log("props", props);
</script>
