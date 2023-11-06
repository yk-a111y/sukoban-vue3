import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { usePlayerStore } from "../player";

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })
  it('player should move left', () => {
    // 测试分层选择：直接测数据处理逻辑 or 键盘事件 + 数据处理逻辑
    // set up 准备数据
    const { player, movePlayerToLeft } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToLeft()

    expect(player.x).toBe(0);
  })

  it('player should move right', () => {
    // set up 准备数据
    const { player, movePlayerToRight } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToRight()

    expect(player.x).toBe(2);
  })

  it('player should move down', () => {
    // set up 准备数据
    const { player, movePlayerToDown } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToDown()

    expect(player.y).toBe(2);
  })

  it('player should move Up', () => {
    // set up 准备数据
    const { player, movePlayerToUp } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToUp()

    expect(player.y).toBe(0);
  })
})

