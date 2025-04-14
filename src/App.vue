<template>
  <app-header />

  <main class="container">
    <div class="task-items">
      <task-item v-for="task in taskStore.taskList" :key="task.id" :task-item="task" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppHeader from "./components/app-header.vue";

import TaskItem from "./components/task-item.vue";
import useTaskStore from "./stores/task-store";

const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.getTasksList();
});
</script>

<style>
.task-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--main-border-color);
  border-radius: 16px;
  padding: 16px;
}
</style>
