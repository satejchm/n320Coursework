<template>
  <div>
    <div class="farm"><div v-for="plot in plots" class="plot"> {{ plot }}</div>
  </div>
</template>

<script>
import GameData from "../GameData.js"
export default {
    data: function() {
        return {
        plots: [1, 1, 1, 1]
        }
    },
  name: "Farm"
};
</script>

<style scoped>
.farm {
    display: flex; }

.plot {
    width: 40px;
    height: 40px;
    margin: 2px;
    border: 1px solid gray}
    </style>