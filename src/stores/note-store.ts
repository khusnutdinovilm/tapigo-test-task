import { defineStore } from "pinia";
import { ref } from "vue";

import noteService from "@/services/note-service";
import type { INoteItem } from "@/types";

const useNoteStore = defineStore("note-store", () => {
  const noteList = ref<INoteItem[]>([]);

  const getNoteList = async () => {
    try {
      noteList.value = await noteService.getNotesList();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    noteList,
    getNoteList,
  };
});

export default useNoteStore;
