<template>
  <div class="w-full">
    <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      v-focus="focus"
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-model="value"
      class="border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
    />
    <span v-if="errorMessage" class="text-red-600 text-sm mt-1 block">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps<{
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  rules?: any;
  focus?: boolean;
}>();

const { value, errorMessage, meta } = useField(props.name, props.rules);
</script>
