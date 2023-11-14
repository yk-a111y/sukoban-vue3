import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })

  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ])
    })
    it('player should move to left', () => {
      // 测试分层选择：直接测数据处理逻辑 or 键盘事件 + 数据处理逻辑
      // set up 准备数据
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft()

      expect(player.x).toBe(0);
    })

    it('player should move to right', () => {
      // set up 准备数据
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight()

      expect(player.x).toBe(2);
    })

    it('player should move to down', () => {
      // set up 准备数据
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown()

      expect(player.y).toBe(2);
    })

    it('player should move to Up', () => {
      // set up 准备数据
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp()

      expect(player.y).toBe(0);
    })
  })

  describe('collision wall', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ]
      setupMap(map);
    })
    it('should not move to left when collision a wall', () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;
  
      movePlayerToLeft();
      expect(player.x).toBe(1);
    })

    it('should not move to right when collision a wall', () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 3;
      player.y = 1;
  
      movePlayerToRight();
      expect(player.x).toBe(3);
    })

    it('should not move to down when collision a wall', () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 3;
  
      movePlayerToDown();
      expect(player.y).toBe(3);
    })

    it('should not move to up when collision a wall', () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;
  
      movePlayerToUp();
      expect(player.y).toBe(1);
    })
  })

  describe('push a cargo', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ]
      setupMap(map);
    })

    it('should push a cargo to left', () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({x: 2, y: 1});
      addCargo(cargo);
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 3;
      player.y = 1;
      movePlayerToLeft();
      expect(cargo.x).toBe(1);
    })

    it('should push a cargo to right', () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({x: 2, y: 1});
      addCargo(cargo);
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToRight();
      expect(cargo.x).toBe(3);
    })

    it('should push a cargo to down', () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({x: 2, y: 2});
      addCargo(cargo);
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 2;
      player.y = 1;
      movePlayerToDown();
      expect(cargo.y).toBe(3);
    })

    it('should push a cargo to up', () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({x: 2, y: 2});
      addCargo(cargo);
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 2;
      player.y = 3;
      movePlayerToUp();
      expect(cargo.y).toBe(1);
    })

    it('should not push a cargo when the cargo hits the wall', () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({x: 1, y: 1});
      addCargo(cargo);
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 2;
      player.y = 1;
      movePlayerToLeft();
      expect(cargo.x).toBe(1);
      expect(player.x).toBe(2);
    })

    it('should not push a cargo when the cargo hits other cargos', () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({x: 2, y: 1})
      addCargo(cargo);
      addCargo(createCargo({x: 3, y: 1}));
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToRight();
      expect(cargo.x).toBe(2);
      expect(player.x).toBe(1);
    })
  })
})

