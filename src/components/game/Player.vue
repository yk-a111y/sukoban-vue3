<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg">
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { usePlayerStore } from '../../store/player'
import { usePosition } from '../../composables/usePosition';
import keeperImg from '../../assets/keeper.png';
import { useGameStore } from '../../store/game';

// 移动逻辑
useMove();

// 位置逻辑
const { player } = usePlayerStore();
const { position }  = usePosition(player);

function useMove () {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp
  } = usePlayerStore();
  onMounted(() => {
    window.addEventListener('keyup', handleKeyUp);
  })

  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyUp);
  })
  

  function handleKeyUp (e: KeyboardEvent) {
    const { detectIsGameCompleted } = useGameStore();
    switch(e.code) {
      case 'ArrowLeft': 
        movePlayerToLeft();
        break;
      case 'ArrowRight': 
        movePlayerToRight();
        break;
      case 'ArrowDown': 
        movePlayerToDown();
        break;
      case 'ArrowUp': 
        movePlayerToUp();
        break;
    }
    detectIsGameCompleted();
  }
}
</script>

<style scoped>

</style>