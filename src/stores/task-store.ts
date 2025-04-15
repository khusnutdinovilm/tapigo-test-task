import { defineStore } from "pinia";

import taskService from "@/services/task-service";
import type { ITaskItem } from "@/types";

const useTaskStore = defineStore("task-store", () => {
  const getTaskByNoteId = async (noteId: number): Promise<ITaskItem[]> => {
    return await taskService.getTaskByNoteId(noteId);
  };

  const toggleTask = async (noteId: number, taskId: number) => {
    await taskService.toggleTask(noteId, taskId);
  };

  return {
    getTaskByNoteId,
    toggleTask,
  };
});

export default useTaskStore;
