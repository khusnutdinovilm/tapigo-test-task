import type { ITaskItem } from "@/types";

type MarkedTask = {
  [key: number]: number[];
};

class TaskService {
  private markedTasks: MarkedTask;

  constructor() {
    const markedTasksLS = localStorage.getItem("marked-tasks");
    this.markedTasks = markedTasksLS ? JSON.parse(markedTasksLS) : {};
  }

  private saveMarkedTasksInLS() {
    localStorage.setItem("marked-tasks", JSON.stringify(this.markedTasks));
  }

  async getTaskByNoteId(noteId: number): Promise<ITaskItem[]> {
    const res = await fetch(`db/tasks/${noteId}.json`, { method: "get" });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const tasks = (await res.json()) as ITaskItem[];

    if (noteId in this.markedTasks) {
      return tasks.map(t => ({
        ...t,
        done: this.markedTasks[noteId].includes(t.id),
      }));
    }

    this.markedTasks[noteId] = tasks.filter(t => t.done).map(t => t.id);
    this.saveMarkedTasksInLS();

    return tasks;
  }

  async toggleTask(noteId: number, taskId: number) {
    const markedIdx = this.markedTasks[noteId].findIndex(m => m === taskId);

    if (markedIdx === -1) {
      this.markedTasks[noteId].push(taskId);
    } else {
      this.markedTasks[noteId].splice(markedIdx, 1);
    }

    this.saveMarkedTasksInLS();
  }
}

export default new TaskService();
