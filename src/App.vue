<template>
  <main>
    <div class="task-items">
      <task-item v-for="task in taskStore.taskList" :key="task.id" :task-item="task" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import TaskItem from "./components/task-item.vue";
import useTaskStore from "./stores/task-store";

const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.getTasksList();
});
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px dashed black;
  border-radius: 16px;
  padding: 16px;
}
</style>
