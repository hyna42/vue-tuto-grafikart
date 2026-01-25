<!-- TODOLIST -->

<template>
  <form action="" @submit.prevent="addNewtask">
    <fieldset role="group">
      <input type="text" placeholder="Tâche à effectuer" v-model="taskTitle" />
      <button :disabled="!taskTitle.length">Ajouter</button>
    </fieldset>
  </form>

  <p v-if="!taskList.length">Vous n'avz pas de tâches à faire :(</p>

  <div v-else>
    <ul>
      <li
        v-for="task in sortedTasks"
        :key="task.date"
        :class="{ completed: task.completed }"
      >
        <Checkbox :label="task.title" 
        @check="(p)=>console.log('coché',p)"
        @uncheck="console.log('décoché')"
        v-model="task.completed"
        />
      </li>
    </ul>

    <Checkbox 
      :label="'Masquer les tâches réalisées'"
      v-model="hideCompleted"
    />
    <p v-if="remainingTodos">
      {{ remainingTodos }} tâche{{ remainingTodos > 1 ? "s" : "" }} à faire
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Checkbox from "./Checkbox.vue";

//liste de tâches
const taskList = ref([
  { title: "GE Healthcare", completed: false, date: Date.now() },
  { title: "SOCOFER", completed: false, date: Date.now() },
  { title: "NAT SYSTEM", completed: false, date: Date.now() },
]);

//tâche dynamique
const taskTitle = ref("");

//creer une nouvelle tâche
const addNewtask = () => {
  taskList.value = [
    ...taskList.value,
    {
      title: taskTitle.value,
      completed: false,
      date: Date.now(),
    },
  ];
  taskTitle.value = "";
  console.log("::::", taskList.value);
};

//filtrer tâches
const sortedTasks = computed(() => {
  console.log("demo");
  const sortedTodos = taskList.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1,
  );

  if (hideCompleted.value === true) {
    return sortedTodos.filter((t) => t.completed === false);
  }
  return sortedTodos;
});

//nombre de taches a faire
const remainingTodos = computed(() => {
  return taskList.value.filter((t) => t.completed === false).length;
});

//variable pour masquer les tâches cochées
const hideCompleted = ref(false);
</script>

<style>
li {
  list-style: none;
}

.completed {
  opacity: 0.5;
  text-decoration: line-through;
  /* text-decoration: strike-through; */
}
</style>
