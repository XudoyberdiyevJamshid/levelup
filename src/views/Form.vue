<template>
  <div class="max-w-md mx-auto mt-10 p-4 border rounded shadow">
    <Form
      ref="form"
      :validation-schema="schema"
      @submit="submit"
      :initial-values="formData"
    >
      <FormInput placeholder="Ism" label="Ism" name="name" type="text" />
      <FormInput
        class="mt-5"
        focus
        placeholder="email"
        label="Email"
        name="email"
        type="email"
      />
      <FormInput
        class="mt-5"
        placeholder="Parol"
        label="Parol"
        name="password"
        type="password"
      />
      <Button class="w-full mt-4 py-3" type="submit">submit</Button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/btn/Button.vue";
import FormInput from "@/components/form/FormInput.vue";
import { Form } from "vee-validate";
import { ref } from "vue";
import * as yup from "yup";
const form = ref(null);
import { inject } from "vue";
import { useRouter } from "vue-router";

const schema = yup.object().shape({
  name: yup.string().required("Ims kiritish majburiy"),
  email: yup
    .string()
    .email("emal xato kirtildi ")
    .required("email kirtish majburiy"),
  password: yup
    .string()
    .required("parol kirtish majburiy")
    .min(6, "6ta belgidan kam bo'lmasin "),
});
const router = useRouter();

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const updateform = inject<(obj: any) => void>("updateform");

const submit = (values: any) => {
  if (values && updateform) {
    updateform(values);
    router.push("/dynamic");
  }
};
</script>

<style scoped></style>
