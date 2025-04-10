import type { ITaskItem } from "@/types/task";

class TaskService {
  async getTasksList(): Promise<ITaskItem[]> {
    const res = await fetch("db/tasks.json", {
      method: "get",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  }
}

export default new TaskService();
