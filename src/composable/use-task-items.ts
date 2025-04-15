import useTaskStore from "@/stores/task-store";
import type { ITaskItem } from "@/types";
import { computed, ref } from "vue";

export default function () {
  const taskStore = useTaskStore();

  const tasks = ref<ITaskItem[]>([]);

  const getTasksList = async (noteId: number) => {
    tasks.value = await taskStore.getTaskByNoteId(noteId);
  };

  const toggleTaskItem = async (noteId: number, taskId: number) => {
    const task = tasks.value.find(t => t.id === taskId);
    if (!task) return;

    task.done = !task.done;

    taskStore.toggleTask(noteId, taskId);
  };

  const doneTasks = computed(() => tasks.value.filter(t => t.done));
  const unDoneTasks = computed(() => tasks.value.filter(t => !t.done));

  return {
    tasks,
    doneTasks,
    unDoneTasks,
    getTasksList,
    toggleTaskItem,
  };
}
