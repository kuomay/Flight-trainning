<script setup>
import { ref } from 'vue'
const center = ref([841, 24])
const projection = ref('EPSG:4326')
const zoom = ref(8)
const rotation = ref(0)
</script>

<template>
  <ol-map style="height: 100vh; width: 100vw">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer :zIndex="1001">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer :zIndex="1001">
      <ol-source-tile-wms
        url="https://ahocevar.com/geoserver/wms"
        layers="CITY"
        server-type="geoserver"
        :transition="0"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<style scoped>
@import 'vue3-openlayers/dist/vue3-openlayers.css';
</style>
