<template>
  <header class="h-16 bg-brand-700">
    <div class="container h-full">
      <nav class="flex justify-between items-center h-full">
        <div class="flex items-center gap-8">
          <img :src="logo" width="35" alt="logo" />

          <ul class="flex gap-5 items-center">
            <li v-for="item in menuItems" :key="item.to">
              <RouterLink
                :to="item.to"
                class="text-base font-semibold text-white px-4 py-2"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <Darkmode />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Darkmode from "@/components/darkmode.vue";

// Logo-ni import qilish (WebPack yoki Vite)
const logo = new URL("../assets/logo.svg", import.meta.url).href;

const menuItems = ref([
  { name: "Form", to: "/" },
  { name: "Search", to: "/Search" },
  { name: "Dynamic component", to: "/dynamic" },
]);
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  background-color: #7f56d9;
  border-radius: 8px;
}
</style>
