<template>
  <div class="home">
    <toggleView />
    <BaseMap :markers="markers" />
  </div>
</template>

<script>
import BaseMap from "@/components/BaseMap.vue";

export default {
  name: "home",
  components: {
    BaseMap
  },
  data() {
    return {
      markers: null
    };
  },
  created() {
    fetch("/.netlify/functions/jam-me-up")
      .then(res => res.json())
      .then(data => {
        this.markers = this.geojsonify(data.results);
      });
  },
  methods: {
    geojsonify(response) {
      let features = [];
      response.map(item => {
        features.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [item.coordinates.longitude, item.coordinates.latitude]
          },
          properties: {
            ...item
          }
        });
      });
      return {
        type: "FeatureCollection",
        features
      };
    }
  }
};
</script>

<style lang="scss">
.home {
  height: 500px;
}
</style>
