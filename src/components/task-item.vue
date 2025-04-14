<template>
  <div class="task-item" :class="{ 'task-item--checked': taskItem.done }">
    <ui-checkbox
      :label="taskItem.title"
      :id="taskItem.id"
      v-model="taskItem.done"
      @update:model-value="() => toggleTaskItem(taskItem.id)"
    />
  </div>
</template>

<script setup lang="ts">
import UiCheckbox from "@/components/ui/base-checkbox.vue";
import useTaskStore from "@/stores/task-store";
import type { ITaskItem } from "@/types/task";

defineOptions({
  name: "task-item",
});

defineProps<{
  taskItem: ITaskItem;
}>();

const { toggleTaskItem } = useTaskStore();
</script>

<style>
.task-item--checked .base-checkbox__label {
  text-decoration: line-through;
}
</style>
