import type { ITaskItem } from "@/types/task";

class TaskService {
  private tasks: ITaskItem[];

  constructor() {
    const lsTasks = localStorage.getItem("tasks");
    this.tasks = lsTasks ? JSON.parse(lsTasks) : [];
  }

  private saveTasksInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  async getTasksList(): Promise<ITaskItem[]> {
    if (this.tasks) {
      return this.tasks;
    } else {
      const res = await fetch("db/tasks.json", {
        method: "get",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      this.tasks = await res.json();
      this.saveTasksInLocalStorage();

      return this.tasks;
    }
  }

  async updateTaskItem(taskId: number): Promise<ITaskItem> {
    const idx = this.tasks.findIndex(task => task.id === taskId);
    if (idx === -1) {
      throw new Error(`Задача с id=${taskId} не найдена`);
    }

    this.tasks[idx].done = !this.tasks[idx].done;
    this.saveTasksInLocalStorage();

    return this.tasks[idx];
  }
}

export default new TaskService();
