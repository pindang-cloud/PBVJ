<template>
    <div class="flex items-center justify-center w-full h-screen">
      <!-- Container untuk peta -->
      <div id="map" class="w-full h-full rounded-lg shadow-lg"></div>
    </div>
</template>
  
<script>
  import L from "leaflet";
  
  export default {
    name: "MapView",
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        // Inisialisasi peta
        const map = L.map("map").setView([-6.200000, 106.816666], 13); // Jakarta
  
        // Tambahkan tile dari OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
  
        // Tambahkan marker
        L.marker([-6.200000, 106.816666])
          .addTo(map)
          .bindPopup("Jakarta<br>Indonesia")
          .openPopup();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Pastikan peta memiliki tinggi penuh */
  #map {
    height: 100%;
    width: 100%;
  }
  </style>
  