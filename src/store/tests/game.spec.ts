import { expect, describe, it, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";
import { useGameStore } from "../game";
import { createPinia, setActivePinia } from "pinia";

describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })

  it('game should be completed', () => {
    const { createCargo, addCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({x: 2, y: 2})
    addCargo(cargo);
    const { createTarget, addTarget } = useTargetStore();
    addTarget(createTarget({x: 3, y: 2}));

    moveCargo(cargo, 1, 0);

    const { detectIsGameCompleted, game } = useGameStore();
    detectIsGameCompleted();
    
    expect(game.isGameCompleted).toBe(true);
  })

  it('game should not be completed', () => {
    const { createCargo, addCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({x: 2, y: 2})
    addCargo(cargo);
    const { createTarget, addTarget } = useTargetStore();
    addTarget(createTarget({x: 3, y: 2}));

    moveCargo(cargo, 1, 0);
    moveCargo(cargo, 1, 0);

    const { detectIsGameCompleted, game } = useGameStore();
    detectIsGameCompleted();
    
    expect(game.isGameCompleted).toBe(false);
  })
})