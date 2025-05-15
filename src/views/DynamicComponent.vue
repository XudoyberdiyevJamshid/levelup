<template>
  <div>
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200"
    >
      <li class="me-2" @click="changeTab('users')">
        <a
          href="#"
          aria-current="page"
          :class="{ 'bg-gray-100 text-blue-600': activeTab == 'users' }"
          class="inline-block p-4 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg active"
          >User</a
        >
      </li>
      <li class="me-2" @click="changeTab('comments')">
        <a
          :class="{ 'bg-gray-100 text-blue-600': activeTab == 'comments' }"
          href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >Comments</a
        >
      </li>
      <li class="me-2" @click="changeTab('provide/inject')">
        <a
          :class="{
            'bg-gray-100 text-blue-600': activeTab == 'provide/inject',
          }"
          href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >provide/inject</a
        >
      </li>
    </ul>

    <div class="mt-4">
      <component :is="asyncComponent"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";

const activeTab = ref("users");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};

const asyncComponent = computed(() => {
  if (activeTab.value === "users") {
    return defineAsyncComponent(() => import("@/components/dynamic/Users.vue"));
  } else if (activeTab.value === "comments") {
    return defineAsyncComponent(
      () => import("@/components/dynamic/Comments.vue")
    );
  } else {
    return defineAsyncComponent(
      () => import("@/components/provide/provide-inject.vue")
    );
  }
});
</script>

<style scoped></style>
