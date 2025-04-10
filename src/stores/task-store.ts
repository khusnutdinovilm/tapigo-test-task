import { defineStore } from "pinia";
import { computed, ref } from "vue";

import taskService from "@/services/task-service";
import type { ITaskItem } from "@/types/task";

const useTaskStore = defineStore("task-service", () => {
  const taskList = ref<ITaskItem[]>([]);

  const doneTasks = computed(() => taskList.value.filter(task => task.done));
  const unDoneTasks = computed(() => taskList.value.filter(task => !task.done));

  const getTasksList = async () => {
    taskList.value = await taskService.getTasksList();
    saveTasksInLocalStorage();
  };

  const saveTasksInLocalStorage = () =>
    localStorage.setItem("tasks", JSON.stringify(taskList.value));

  const toggleTaskItem = (taskId: number) => {
    const idx = taskList.value.findIndex(task => task.id === taskId);

    if (idx === -1) {
      throw new Error(`Элемента с id=${taskId} не существует`);
    }

    taskList.value[idx].done = !taskList.value[idx].done;
    saveTasksInLocalStorage();
  };

  return {
    doneTasks,
    unDoneTasks,
    getTasksList,
    saveTasksInLocalStorage,
    toggleTaskItem,
  };
});

export default useTaskStore;
