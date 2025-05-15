<template>
  <div
    class="bg-white shadow-md rounded-xl p-5 space-y-3 hover:shadow-lg transition border"
  >
    <div class="text-sm text-gray-400">ID: {{ comment.id }}</div>
    <h2 class="text-lg font-semibold text-gray-800">{{ comment.name }}</h2>
    <p class="text-gray-700 text-sm whitespace-pre-line">{{ comment.body }}</p>
    <div class="text-sm text-blue-500 font-medium mt-2">
      {{ comment.email }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { type ICommet } from "@/type/dynamic";
defineProps<{ comment: ICommet }>();
</script>
