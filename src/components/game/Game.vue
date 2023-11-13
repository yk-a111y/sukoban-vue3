<template>
  <div>
    <Map />
    <Target :x="target.x" :y="target.y"/>
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y"/>
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

const { target } = useTargetStore();

</script>

<style scoped>

</style>