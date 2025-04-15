import type { INoteItem } from "@/types";

class NoteService {
  async getNotesList(): Promise<INoteItem[]> {
    const res = await fetch("db/notes.json", { method: "get" });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  }
}

export default new NoteService();
