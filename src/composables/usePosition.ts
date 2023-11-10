import { computed } from "vue";

export type Position = {
  x: number,
  y: number
}

export function usePosition(pos: Position) {
  const STEP: number = 32;
  const position = computed(() => {
    return {
      left: pos.x * STEP + 'px',
      top: pos.y * STEP + 'px'
    }
  })

  return { position }
}