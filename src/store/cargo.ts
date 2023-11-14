import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/usePosition";
import { useMapStore } from "./map";
import { useTargetStore } from "./target";

export interface Cargo {
  x: number,
  y: number,
  onTarget: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([]);

  function createCargo ({x, y}: {x: number, y: number}) : Cargo {
    return {
      x,
      y,
      onTarget: false
    }
  }
  
  function addCargo (cargo: Cargo) {
    cargos.push(cargo);
  }

  function findCargo (position: Position) {
    return cargos.find(c => {
      return (c.x === position.x && c.y === position.y);
    })
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number): boolean {
    const { isWall } = useMapStore();
    // 箱子撞墙
    if (isWall({
      x: cargo.x + dx,
      y: cargo.y + dy
    })) {
      return false;
    }
    // 箱子撞箱子
    if (findCargo({
      x: cargo.x + dx,
      y: cargo.y + dy
    })) {
      return false;
    }

    cargo.x += dx;
    cargo.y += dy;

    detectionTarget(cargo)

    return true;
  }

  function detectionTarget(cargo: Cargo) {
    const { findTarget } = useTargetStore();
    cargo.onTarget = !!findTarget(cargo);
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo
  }
})