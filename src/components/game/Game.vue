<template>
  <div>
    <Map />
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
import { useCargoStore } from '../../store/cargo';

const { cargos, createCargo, addCargo } = useCargoStore();
addCargo(createCargo({x: 2, y: 4}));

</script>

<style scoped>

</style>