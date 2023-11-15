import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/usePosition";

interface Target {
  x: number,
  y: number
}

export const useTargetStore = defineStore('target', () => {
  const targets = reactive<Target[]>([]);

  function addTarget(target: Target) {
    targets.push(target);
  }
  
  function createTarget({x, y}: {x: number, y: number}) {
    return {
      x, y
    }
  }

  function findTarget(position: Position) {
    return targets.find(t => {
      return t.x === position.x && t.y === position.y;
    })
  }

  return {
    targets,
    addTarget,
    createTarget,
    findTarget
  }
})