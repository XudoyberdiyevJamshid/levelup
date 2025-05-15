<template>
  <div>
    <h1>Formani to'diring va submit tugmasini bosing</h1>
    <p class="mt-2"><span class="font-bold">Ism:</span> {{ form?.name }}</p>
    <p class="mt-2"><span class="font-bold">Email:</span> {{ form?.email }}</p>
    <p class="mt-2">
      <span class="font-bold">Parol:</span> {{ form?.password }}
    </p>
  </div>
</template>

<script setup lang="ts">
type FormData = {
  name: string;
  email: string;
  password: string;
};
import { inject } from "vue";

const form = inject<FormData>("formdata");
</script>

<style scoped></style>
