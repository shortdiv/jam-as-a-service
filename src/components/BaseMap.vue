<template>
  <div id="map" ref="map">
    <slot :mapContext="mapContext" :loaded="loaded"></slot>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "BaseMap",
  props: {
    mapStyle: {
      type: String,
      required: false,
      default: "mapbox://styles/mapbox/light-v8"
    },
    center: {
      type: Array,
      required: false,
      default: () => [-97.7436995, 30.2711286]
    },
    zoom: {
      type: Number,
      required: false,
      default: 12
    },
    markers: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      mapContext: null,
      loaded: false
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxscnlkZXIiLCJhIjoidWs5cUFfRSJ9.t8kxvO3nIhCaAl07-4lkNw";
    var map = new mapboxgl.Map({
      container: this.$refs.map,
      style: this.mapStyle,
      center: this.center,
      zoom: this.zoom
    });
    // this.mapContext = map;
    map.on("load", () => {
      this.loaded = true;
      if (this.markers) {
        map.addSource("markers", {
          type: "geojson",
          data: this.markers
        });
        map.addLayer({
          id: "markers",
          type: "symbol",
          source: "markers",
          layout: {
            "icon-image": "marker-15",
            "icon-allow-overlap": true
          },
          paint: {
            "icon-color": "red"
          }
        });
        map.on("mouseenter", "markers", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "markers", () => {
          map.getCanvas().style.cursor = "";
        });
        map.on("click", "markers", event => {
          this.popup = new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<p>${event.features[0].properties.name}</p>`)
            .addTo(map);
        });
      }
    });
  }
};
</script>

<style lang="scss">
@import "@/styles/map-styles.scss";

#map {
  height: 100%;
  width: 100%;
}
</style>
