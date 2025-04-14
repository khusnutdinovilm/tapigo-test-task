<template>
  <label :for="id.toString()" class="base-checkbox">
    <input
      :id="id.toString()"
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
  modelValue: boolean;
  label: string;
  id: number;
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
  align-items: center;
  gap: 5px;
}

.base-checkbox__input {
  display: none;
}

.base-checkbox__checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid black;
  border-radius: 4px;
  position: relative;
  transition: background 0.2s ease;
}

.base-checkbox input:checked + .base-checkbox__checkmark {
  background-color: black;
}

.base-checkbox input:checked + .base-checkbox__checkmark::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
