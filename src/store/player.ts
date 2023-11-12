import { defineStore } from "pinia";
import { reactive } from "vue";
import { MapTile, useMapStore } from "./map";
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1
  })

  function _move(dx: number, dy: number) {
    const nextPosition = {
      x: player.x + dx,
      y: player.y + dy
    }
    const { isWall } = useMapStore();
    if (isWall(nextPosition)) return;
    const { findCargo } = useCargoStore();
    const cargo = findCargo(nextPosition);
    if (cargo) {
      cargo.x += dx;
      cargo.y += dy;
    }
    player.x += dx;
    player.y += dy;
  }

  function movePlayerToLeft () {
    _move(-1, 0);
  }

  function movePlayerToRight () {
    _move(1, 0);
  }

  function movePlayerToDown () {
    _move(0, 1);
  }

  function movePlayerToUp () {
    _move(0, -1);
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp
  }
})