import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTargetStore = defineStore('target', () => {
  const target = reactive({
    x: 3,
    y: 3
  })

  return {
    target
  }
})