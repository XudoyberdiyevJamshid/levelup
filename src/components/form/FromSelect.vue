<template>
  <div class="flex flex-col">
    <label
      v-if="label"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="select"
      >{{ label }}</label
    >

    <v-select
      v-bind="$attrs"
      v-model="modelValue"
      class="custom-select w-full"
      :label="text"
      :reduce="reduce"
      id="select"
      :placeholder="placeholder || 'Quydagilardan tanlang'"
      :name="text"
      :options="options"
      :disabled="disabled"
    ></v-select>
  </div>
</template>

<script setup lang="ts">
import type { ISelect } from "@/type/base";

const modelValue = defineModel<string | number | null>();

interface IProps {
  options: ISelect[];
  label?: string;
  text: string;
  placeholder?: string;
  disabled?: boolean;
  reduce?: (option: ISelect) => any;
}

const props = defineProps<IProps>();
</script>

<style scoped>
.custom-select-container {
  width: 100%;
}

.custom-select::v-deep(.vs__dropdown-toggle) {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.custom-select::v-deep(.vs__dropdown-toggle:hover) {
  border-color: #cbd5e1;
}

.custom-select::v-deep(.vs__search::placeholder) {
  color: #9ca3af;
}
</style>
