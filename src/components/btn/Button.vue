<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-150 focus:outline-none',
      variantClass,
      sizeClass,
      { 'opacity-50 cursor-not-allowed': loading || disabled },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  variant?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: string;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<IProps>(), {
  disabled: false,
  type: "button",
  loading: false,
  size: "md",
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700";
    case "secondary":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    case "danger":
      return "bg-red-600 text-white hover:bg-red-700";
    case "light":
      return "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50";
    default:
      return "bg-blue-600 text-white hover:bg-blue-700";
  }
});
const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "text-sm px-3 py-1.5";
    case "lg":
      return "text-lg px-6 py-3";
    default:
      return "text-sm px-4 py-2.5";
  }
});
</script>

<style scoped></style>
