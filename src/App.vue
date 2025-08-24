<template>
  <div id="map"></div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import { drawMap } from './proc';

onMounted(async () => {
  await drawMap('map');
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#map {
  height: 1000px;
  width: 1000px;
  margin: 0;
}

.legend {
  background: white;
  padding: 8px 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
  font: 12px/1.4 system-ui, sans-serif;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
