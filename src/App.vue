<template>
  <Main> <router-view></router-view> </Main>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
type FormData = {
  name: string;
  email: string;
  password: string;
};
const form = ref<FormData>({
  name: "",
  email: "",
  password: "",
});

const UpdateForm = (obj: any) => {
  form.value = obj;
};

provide("formdata", form);
provide("updateform", UpdateForm);

import Main from "./Layouts/Main.vue";
</script>

<style scoped></style>
