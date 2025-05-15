<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <h6
      class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
      FirstName:
      <span class="font-normal text-gray-700 dark:text-white">{{
        item.first_name
      }}</span>
    </h6>
    <h6
      class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
      LastName:
      <span class="font-normal text-gray-700 dark:text-white">{{
        item.last_name
      }}</span>
    </h6>
    <h6
      class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Email:
      <span class="font-normal text-gray-700 dark:text-white">{{
        item.email
      }}</span>
    </h6>
    <h6
      class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Number:
      <span class="font-normal text-gray-700 dark:text-white">{{
        item.phone
      }}</span>
    </h6>
  </div>
</template>

<script setup lang="ts">
import { type ICarditem } from "@/type/search";

const props = defineProps<{ item: ICarditem }>();
</script>

<style scoped></style>
