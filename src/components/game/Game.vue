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
  </div>
</template>

<script setup lang="ts">
import Map from './Map.vue';
import Player from './Player.vue';
import Cargo from './Cargo.vue';
import Target from './Target.vue';
import { useCargoStore } from '../../store/cargo';
import { useTargetStore } from '../../store/target';

const { cargos, createCargo, addCargo } = useCargoStore();
addCargo(createCargo({x: 2, y: 4}));

const { targets } = useTargetStore();

</script>

<style scoped>

</style>