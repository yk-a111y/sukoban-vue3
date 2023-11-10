<template>
  <div class="absolute" :style="position">
    <img :src=cargoImg>
  </div>
</template>

<script setup lang="ts">
import { usePosition } from '../../composables/usePosition'
import cargoImg from '../../assets/cargo.png';

interface Props {
  x: number,
  y: number
}
const props = defineProps<Props>()

const { position } = usePosition(props);
</script>

<style scoped>

</style>