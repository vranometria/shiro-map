<template>
  <div id="map"></div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Casles } from './casles';

let castleLayer: L.LayerGroup;

const addCastleMarker = ({ name, lat, lon }) => {
  const p = L.marker([parseFloat(lat), parseFloat(lon)]);
  p.bindPopup(`<b>${name}</b><br>lat: ${lat}<br>lon: ${lon}`);
  castleLayer.addLayer(p);
}

onMounted(async () => {
  // --- ベース地図 ---
  const mapDiv = L.map('map', {
    center: [35.8, 140.2], // 下総あたり
    zoom: 8,
    preferCanvas: true
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapDiv);

  // --- 旧国ポリゴン（GeoJSONをローカル/自鯖から提供） ---
  const kuniLayer = L.geoJSON(null, {
    style: { color: '#d33', weight: 2, fillOpacity: 0.05 },
    onEachFeature: (f, layer) => {
      const n = f.properties?.name || f.properties?.旧国名 || f.properties?.title || '旧国';
      layer.bindPopup(`<b>${n}</b>`);
    }
  }).addTo(mapDiv);

  const res = await fetch('https://geoshape.ex.nii.ac.jp/kg/geojson/K19.geojson')
  const geo = await res.json();
  kuniLayer.addData(geo);
  mapDiv.fitBounds(kuniLayer.getBounds(), { padding: [20, 20] });

  // --- 城マーカー（CSV: name,lat,lon ヘッダでUTF-8） ---
  castleLayer = L.featureGroup().addTo(mapDiv);
  // レイヤ切替
  L.control.layers(null, {
    '旧国境界': kuniLayer,
    '城マーカー': castleLayer
  }, { collapsed: false }).addTo(mapDiv);

  Casles.forEach( n => {
    addCastleMarker(n);
  });
});
console.log("finish");

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
  height: 500px;
  width: 500px;
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
