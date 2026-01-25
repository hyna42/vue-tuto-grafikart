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
        v-for="task in sortedTasks()"
        :key="task.date"
        :class="{ completed: task.completed }"
      >
        <label>
          <input type="checkbox" v-model="task.completed" />
          {{ task.title }}
        </label>
      </li>
    </ul>
    <label for="">
      <input type="checkbox" v-model="hideCompleted" />
      Masquer les tâches à compléter
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

//liste de tâches
const taskList = ref([
  { title: "GE Healthcare", completed: false, date: Date.now() },
  { title: "SOCOFER", completed: true, date: Date.now() },
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
const sortedTasks = () => {
  const sortedTodos = taskList.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1,
  );

  if (hideCompleted.value === true) {
    return sortedTodos.filter((t) => t.completed === false);
  }
  return taskList.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1,
  );
};

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
