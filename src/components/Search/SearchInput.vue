<template>
  <form class="max-w-md mx-auto">
    <div class="relative">
      <!-- Search Icon -->
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <!-- Input -->
      <input
        v-model="modelValue"
        v-focus="true"
        type="search"
        id="default-search"
        class="block outline-none w-full p-4 ps-10 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />

      <XIcon
        v-if="modelValue"
        class="w-4 h-4 absolute right-[90px] bottom-[18px] text-gray-400 cursor-pointer hover:text-gray-600"
        @click="clearInput"
      />

      <button
        type="button"
        @click="emit('search')"
        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
      >
        Search
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { XIcon } from "lucide-vue-next";

const modelValue = defineModel<string>();
const emit = defineEmits(["search"]);

const clearInput = () => {
  modelValue.value = "";
  emit("search");
};
</script>
