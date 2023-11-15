import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCargoStore } from "./cargo";

interface Game {
  isGameCompleted: boolean
}
export const useGameStore = defineStore('game', () => {
  
  const game = reactive<Game>({
    isGameCompleted: false
  })

  function detectIsGameCompleted() {
    const { cargos } = useCargoStore();
    game.isGameCompleted = cargos.every(c => c.onTarget);
  }

  return {
    game,
    detectIsGameCompleted
  }
})