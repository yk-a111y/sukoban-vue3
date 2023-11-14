import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })

  it('should add a cargo', () => {
    const { createCargo, addCargo, cargos } = useCargoStore();
    addCargo(createCargo({x: 1, y: 1}));

    expect(cargos.length).toBe(1);
  })

  describe('if target on target', () => {
    it('shift in', () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();
      const cargo = createCargo({x: 1, y: 1});
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      addTarget(createTarget({x: 2, y: 1}));
      moveCargo(cargo, 1, 0);

      expect(cargo.onTarget).toBe(true);
    })

    it('shift out', () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();
      const cargo = createCargo({x: 1, y: 1});
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      addTarget(createTarget({x: 2, y: 1}));
      moveCargo(cargo, 1, 0);
      moveCargo(cargo, 1, 0);

      expect(cargo.onTarget).toBe(false);
    })
  })
})