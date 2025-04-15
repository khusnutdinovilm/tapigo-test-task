<template>
  <label :for="id" class="base-checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="updateValue"
      class="base-checkbox__input"
    />
    <span class="base-checkbox__checkmark"></span>
    <span class="base-checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
defineOptions({
  name: "base-checkbox",
});

defineProps<{
  id: string;
  modelValue: boolean;
  label: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
</script>

<style>
.base-checkbox {
  display: flex;
  gap: 5px;
}

.base-checkbox__input {
  display: none;
}

.base-checkbox__checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid var(--main-border-color);
  border-radius: 4px;
  position: relative;
  transition: background 0.2s ease;
}

.base-checkbox input:checked + .base-checkbox__checkmark::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 9px;
  border: solid var(--main-border-color);
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
