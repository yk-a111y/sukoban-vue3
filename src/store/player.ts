import { defineStore } from "pinia";
import { reactive } from "vue";
import { MapTile, useMapStore } from "./map";

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1
  })

  function movePlayerToLeft () {
    const { isWall } = useMapStore();
    // const isWall = map[player.x - 1][player.y] === MapTile.WALL;
    if (isWall({x: player.x - 1, y: player.y})) return;
    player.x -= 1;
  }

  function movePlayerToRight () {
    const { isWall } = useMapStore();
    if (isWall({x: player.x + 1, y: player.y})) return;
    player.x += 1;
  }

  function movePlayerToDown () {
    const { isWall } = useMapStore();
    if (isWall({x: player.x, y: player.y + 1})) return;
    player.y += 1;
  }

  function movePlayerToUp () {
    const { isWall } = useMapStore();
    if (isWall({x: player.x, y: player.y - 1})) return;
    player.y -= 1;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp
  }
})