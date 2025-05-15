<!-- components/BaseInput.vue -->
<template>
  <div class="mb-4">
    <label :for="name" class="block mb-1 font-medium">{{ label }}</label>
    <Field
      :name="name"
      :id="name"
      :type="type"
      class="w-full p-2 border rounded"
      :as="as"
    />
    <ErrorMessage :name="name" class="text-red-500 text-sm mt-1" />
  </div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps<{
  name: string;
  label: string;
  type?: string;
  as?: string;
}>();
</script>
