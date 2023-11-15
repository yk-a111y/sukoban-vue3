<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y"/>
    </template>
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo"/>
    </template>
    <div class="bg-red-500" v-if="game.isGameCompleted">
      <button>下一关</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from './Map.vue';
import Player from './Player.vue';
import Cargo from './Cargo.vue';
import Target from './Target.vue';
import { useCargoStore } from '../../store/cargo';
import { useTargetStore } from '../../store/target';
import { useGameStore } from '../../store/game';

// 添加箱子
const { cargos, createCargo, addCargo } = useCargoStore();
addCargo(createCargo({x: 2, y: 4}));

// 添加目标位置
const { targets, createTarget, addTarget } = useTargetStore();
addTarget(createTarget({x: 3, y: 4}));

const { game } = useGameStore();

</script>

<style scoped>

</style>