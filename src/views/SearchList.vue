<template>
  <SearchInput v-model="filter.search" @search="SearchData" />

  <div v-if="loading" class="mt-10 text-center">
    <span class="text-gray-500 text-sm animate-pulse">Loading...</span>
  </div>

  <div class="grid grid-cols-4 gap-4 mt-4" v-else-if="filteredData.length">
    <Card v-for="item in filteredData" :item="item" :key="item.id" />
  </div>

  <div v-else class="mt-14">
    <EmptySate />
  </div>
</template>

<script setup lang="ts">
import data from "@/Data/MOCK_DATA.json";
import Card from "@/components/Search/Card.vue";
import SearchInput from "@/components/Search/SearchInput.vue";
import EmptySate from "@/components/emptySate.vue";
import type { ICarditem } from "@/type/search";
import { onMounted, ref } from "vue";

const filter = ref<{ search: string }>({ search: "" });
const filteredData = ref<ICarditem[]>([]);
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    filteredData.value = data;
    loading.value = false;
  }, 500);
});

const SearchData = () => {
  loading.value = true;
  setTimeout(() => {
    const searchTerm = filter.value.search.toLowerCase().trim();
    if (!searchTerm) {
      filteredData.value = data;
    } else {
      filteredData.value = data.filter((item) =>
        item.first_name.toLowerCase().includes(searchTerm)
      );
    }
    loading.value = false;
  }, 500);
};
</script>
