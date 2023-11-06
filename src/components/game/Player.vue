<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg">
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../../store/player'
import keeperImg from '../../assets/keeper.png';
import { computed, onMounted, onUnmounted } from 'vue';

const STEP = 32;

// 移动逻辑
useMove();

// 位置逻辑
const { position }  = usePosition();

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
  }
}

function usePosition () {
  const { player } = usePlayerStore();
  const position = computed(() => {
    return {
      left: player.x * STEP + 'px',
      top: player.y * STEP + 'px'
    }
  })

  return { position }
}
</script>

<style scoped>

</style>