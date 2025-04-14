import { defineStore } from "pinia";
import { ref } from "vue";

import taskService from "@/services/task-service";
import type { ITaskItem } from "@/types/task";

const useTaskStore = defineStore("task-store", () => {
  const taskList = ref<ITaskItem[]>([]);

  const getTasksList = async () => {
    taskList.value = await taskService.getTasksList();
  };

  const toggleTaskItem = async (taskId: number) => {
    const idx = taskList.value.findIndex(task => task.id === taskId);
    if (idx === -1) return;

    const oldTask = { ...taskList.value[idx] };
    taskList.value[idx].done = !taskList.value[idx].done;
    taskList.value = [...taskList.value];

    try {
      await taskService.updateTaskItem(taskId);
    } catch (error) {
      taskList.value[idx] = oldTask;
      taskList.value = [...taskList.value];
    }
  };

  return {
    taskList,
    getTasksList,
    toggleTaskItem,
  };
});

export default useTaskStore;
