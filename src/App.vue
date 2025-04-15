<template>
  <app-header />

  <main class="container">
    <div class="note-items">
      <note-item
        v-for="note in noteStore.noteList"
        :key="note.id"
        :note="note"
        class="note-items__note"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppHeader from "@/components/app-header.vue";
import NoteItem from "@/components/note-item.vue";
import useNoteStore from "@/stores/note-store";

const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getNoteList();
});
</script>

<style>
.note-items {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

.note-items__note {
  flex: 0 calc(25% - 10px);
}

@media screen and (max-width: 996px) {
  .note-items__note {
    flex-basis: calc(33.3% - 10px);
  }
}

@media screen and (max-width: 768px) {
  .note-items__note {
    flex-basis: calc(50% - 10px);
  }
}

@media screen and (max-width: 576px) {
  .note-items {
    gap: 20px;
  }

  .note-items__note {
    flex-basis: 100%;
  }
}
</style>
