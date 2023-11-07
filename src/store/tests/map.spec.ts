import { describe, it, expect, beforeEach } from 'vitest';
import { useMapStore } from '../map';
import { createPinia, setActivePinia } from 'pinia';

describe('map', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })
  it('should set up map', () => {
    const { map, setupMap } = useMapStore();

    const newMap = [
      [1, 1, 1,],
      [1, 1, 1,],
      [1, 1, 1,],
    ]
    setupMap(newMap)

    expect(map).toEqual(newMap);
  })
})