<template>
  <div class="task-item" :class="{ 'task-item--checked': task.done }">
    <base-checkbox
      :label="`${task.title}`"
      :id="`${noteId}_${task.id}`"
      :model-value="task.done"
      @update:model-value="() => $emit('toggle-task', task.id)"
    />
  </div>
</template>

<script setup lang="ts">
import BaseCheckbox from "@/components/ui/base-checkbox.vue";
import type { ITaskItem } from "@/types";

defineOptions({
  name: "task-item",
});

defineProps<{
  task: ITaskItem;
  noteId: number;
}>();

defineEmits<{
  (e: "toggle-task", taskId: number): void;
}>();
</script>

<style>
.task-item--checked .base-checkbox__label {
  color: var(--secondary-font-color);
  text-decoration: line-through;
}
</style>
