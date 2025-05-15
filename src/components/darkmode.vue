<template>
  <div class="flex">
    <Moon
      v-if="mode == 'moon'"
      @click="togggleMode"
      color="white"
      class="cursor-pointer"
    />
    <Sun
      @click="togggleMode"
      v-if="mode == 'sun'"
      color="white"
      class="cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { useDarkModeStore } from "@/store/DarkModeStore";
import { storeToRefs } from "pinia";

const { mode } = storeToRefs(useDarkModeStore());

const { togggleMode } = useDarkModeStore();
</script>

<style scoped></style>
