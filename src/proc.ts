import * as Leaflet from "leaflet";
import { Casles } from './casles';
import { LayerInfo } from "./types/Layer";

export const drawMap = async (elementId: string) => {
  const leafletMap = createMap(elementId);
  
  // 下総国境を描画
  const shimousa = await drawShimousa(leafletMap);
  const kazusa = await drawKazusa(leafletMap);
  const awa = await drawAwa(leafletMap);
  const musashi = await drawMusashi(leafletMap);
  const countries = [shimousa, kazusa, awa, musashi];
  countries.forEach( n => {
    leafletMap.fitBounds(n.layer.getBounds(), { padding: [20, 20] });
  });

  // --- 城マーカー（CSV: name,lat,lon ヘッダでUTF-8） ---
  const castleLayer = Leaflet.featureGroup().addTo(leafletMap);
  Casles.forEach( n => {
    addCastleMarker(castleLayer, n);
  });

  const config = countries.reduce((acc, cur) => {
    acc[cur.label] = cur.layer;
    return acc;
  }, {});

  config["城"] = castleLayer;
  
  // レイヤ切替
  Leaflet.control.layers(null, config, { collapsed: false }).addTo(leafletMap);
}

export const createMap = (elementId: string): Leaflet.Map => {
  const leafletMap = Leaflet.map(elementId, {
    center: [35.8, 140.2], // 下総あたり
    zoom: 8,
    preferCanvas: true,
  });

  // 背景タイルの表示
  Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(leafletMap);

  return leafletMap;
};

const drawCountry = async (leafletMap: Leaflet.Map, url: string): Promise<Leaflet.GeoJSON> => {
  const res = await fetch(url);
  const geo = await res.json();
  return Leaflet.geoJSON(geo).addTo(leafletMap);
}

export const drawShimousa = async (leafletMap: Leaflet.Map): Promise<LayerInfo> => {
  const layer = await drawCountry(leafletMap, 'https://geoshape.ex.nii.ac.jp/kg/geojson/K19.geojson');
  return { label: '下総', layer };
};

export const drawKazusa = async (leafletMap: Leaflet.Map): Promise<LayerInfo> => {
  const layer = await drawCountry(leafletMap, 'https://geoshape.ex.nii.ac.jp/kg/geojson/K18.geojson');
  return { label: '上総', layer };
};

export const drawAwa = async (leafletMap: Leaflet.Map): Promise<LayerInfo> => {
  const layer = await drawCountry(leafletMap, 'https://geoshape.ex.nii.ac.jp/kg/geojson/K17.geojson');
  return { label: '安房', layer };
};

export const drawMusashi = async (leafletMap: Leaflet.Map): Promise<LayerInfo> => {
  const layer = await drawCountry(leafletMap, 'https://geoshape.ex.nii.ac.jp/kg/geojson/K16.geojson');
  return { label: '武蔵', layer };
};

const addCastleMarker = (castleLayer, { name, lat, lon }) => {
  const p = Leaflet.marker([parseFloat(lat), parseFloat(lon)]);
  p.bindPopup(`<b>${name}</b>`);
  castleLayer.addLayer(p);
}
