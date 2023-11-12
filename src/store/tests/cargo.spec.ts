import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCargoStore } from "../cargo";

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })

  it('should add a cargo', () => {
    const { createCargo, addCargo, cargos } = useCargoStore();
    addCargo(createCargo({x: 1, y: 1}));

    expect(cargos.length).toBe(1);
  })
})