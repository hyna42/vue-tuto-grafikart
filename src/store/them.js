import { defineStore } from "pinia";
import { ref } from "vue";

export const useTheme = defineStore("theme", () => {
  const darkTheme = ref(false);

  const swithTheme = () => {
    darkTheme.value = !darkTheme.value;
  };

  return { isDark: darkTheme, swithTheme };
});
