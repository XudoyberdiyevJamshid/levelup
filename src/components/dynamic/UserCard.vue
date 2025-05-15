<template>
  <div
    class="bg-white shadow-md rounded-xl p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <h2 class="text-xl font-bold text-gray-800 dark:text-white">
      {{ user.name }}
    </h2>
    <p class="text-gray-500 dark:text-gray-300 mb-2">@{{ user.username }}</p>

    <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p>
        <strong>Website:</strong>
        <a
          :href="`http://${user.website}`"
          class="text-blue-600 hover:underline"
          >{{ user.website }}</a
        >
      </p>
    </div>

    <div class="mt-4 text-sm text-gray-700 dark:text-gray-300">
      <p>
        <strong>Address:</strong> {{ user.address.street }},
        {{ user.address.city }}
      </p>
      <p><strong>Company:</strong> {{ user.company.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IUser } from "@/type/dynamic";

defineProps<{ user: IUser }>();
</script>
