<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-1 container mt-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
</script>

<style scoped></style>
