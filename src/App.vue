<template>
  <main>
    <div v-if="unDoneTasks.length !== 0" class="task-items">
      <div
        v-for="task in unDoneTasks"
        class="task-item"
        @click.prevent="taskStore.toggleTaskItem(task.id)"
      >
        <span>{{ task.title }}</span>
      </div>
    </div>

    <div v-if="doneTasks.length !== 0" class="task-items">
      <div
        v-for="task in doneTasks"
        class="task-item"
        :class="{ 'task-item--checked': task.done }"
        @click.prevent="taskStore.toggleTaskItem(task.id)"
      >
        <span>{{ task.title }}</span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import useTaskStore from "./stores/task-store";

const taskStore = useTaskStore();

const doneTasks = computed(() => taskStore.taskList.filter(task => task.done));
const unDoneTasks = computed(() => taskStore.taskList.filter(task => !task.done));

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

.task-item {
  padding: 12px 16px;
  border: 1px solid black;
  border-radius: 12px;
}

.task-item--checked span {
  text-decoration: line-through;
}
</style>
