import { defineStore } from "pinia";
import { ref, watch } from "vue";
export const useDarkModeStore = defineStore("darkmode", () => {
  const mode = ref<"sun" | "moon">("sun");

  const toDark = () => {
    mode.value = "moon";
  };
  const toLight = () => {
    mode.value = "sun";
  };
  const togggleMode = () => {
    mode.value = mode.value == "moon" ? "sun" : "moon";
  };

  watch(
    mode,
    (val) => {
      document.documentElement.classList.toggle("dark", val === "moon");
    },
    { immediate: true }
  );

  return {
    toDark,
    toLight,
    togggleMode,
    mode,
  };
});
