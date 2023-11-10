import { defineStore } from "pinia";
import { reactive } from "vue";

interface Cargo {
  x: number,
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([
    {
      x: 2,
      y: 2
    },
    {
      x: 3,
      y: 3
    }
  ])

  return {
    cargos
  }
})