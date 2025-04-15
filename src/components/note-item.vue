<template>
  <div class="note-item">
    <div class="note-item__title">{{ note.title }}</div>

    <div v-if="unDoneTasks.length" class="note-item__tasks note-item__tasks--undone">
      <transition-group name="undone-list">
        <task-item
          v-for="task in unDoneTasks"
          :key="task.id"
          :task="task"
          :note-id="note.id"
          @toggle-task="toggleTaskItem(note.id, task.id)"
        />
      </transition-group>
    </div>

    <div v-if="doneTasks.length" class="note-item__tasks note-item__tasks--done">
      <transition-group name="done-list">
        <task-item
          v-for="task in doneTasks"
          :key="task.id"
          :task="task"
          :note-id="note.id"
          @toggle-task="toggleTaskItem(note.id, task.id)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import TaskItem from "@/components/task-item.vue";
import useTaskItems from "@/composable/use-task-items";
import type { INoteItem } from "@/types";

defineOptions({
  name: "note-item",
});

const props = defineProps<{
  note: INoteItem;
}>();

const { doneTasks, unDoneTasks, getTasksList, toggleTaskItem } = useTaskItems();

onMounted(async () => {
  try {
    await getTasksList(props.note.id);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
.note-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px;
  border: 1px solid var(--main-border-color);
  border-radius: 16px;
}

.note-item__title {
  font-weight: 600;
}

.note-item__tasks {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.note-item__tasks--done {
  padding-top: 5px;
  border-top: 1px solid var(--main-border-color);
}

.undone-list-enter-active,
.undone-list-leave-active {
  transition: all 0.3s ease;
}
.undone-list-enter-from,
.undone-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.done-list-enter-active,
.done-list-leave-active {
  transition: all 0.3s ease;
}
.done-list-enter-from,
.done-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
