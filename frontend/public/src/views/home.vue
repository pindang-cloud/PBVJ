<template>
  <div>
    <!-- main-section -->
    <section
      class="bg-img min-h-screen flex sm:flex-col md:flex-row md:justify-between justify-center items-center"
    >
      <div
        class="flex flex-col md:flex-row-reverse justify-center items-center"
      >
        <!-- Logo Social Media -->
        <div
          class="flex flex-row sm:mt-8 md:flex-col md:fixed md:left-0 justify-center lg:-translate-y-1/2 md:space-y-3 md:ml-3 order-last sm:space-x-3 md:space-x-0 md:z-50"
        >
          <a href="#">
            <img
              src="../assets/icons/facebook-logo.png"
              alt="facebook-logo"
              class="w-5 h-auto"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              src="../assets/icons/instagram-logo.png"
              alt="instagram-logo"
              class="w-5 h-auto"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              src="../assets/icons/youtube-logo.png"
              alt="youtube-logo"
              class="w-5 h-auto"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Teks Utama dengan Efek Fade-In -->
        <div class="md:ml-12 fade-in">
          <h1
            class="uppercase font-bold text-3xl tracking-wider text-white md:text-5xl lg:text-7xl"
          >
            PBVSI <br />
            KOTA JEMBER
          </h1>
          <h3
            class="font-normal text-yellow-500 italic text-sm mt-2 md:text-lg lg:text-2xl"
          >
            Persatuan Bola Voli SeIndonesia
          </h3>
          <div class="flex items-stretch h-max mt-8 sm:hidden">
            <div class="w-2/3 bg-white px-4 py-2 flex items-center">
              <h3
                class="uppercase tracking-widest font-bold text-xs text-center lg:text-xl"
              >
                lihat detail
              </h3>
            </div>
            <div
              class="bg-yellow-600 px-2 py-1 flex justify-center items-center"
            >
              <img
                src="../assets/icons/arrow-right.png"
                alt="arrow-right"
                class="w-5 lg:w-7"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Teks Scroll -->
      <div
        class="flex flex-col items-center md:fixed md:right-0 sm:mt-10 md:mt-0 md:mr-3 lg:transform lg:-translate-y-1/2 text-white text-sm font-semibold md:z-50"
      >
        <p
          class="mb-2 writing-mode-vertical md:text-center md:mb-2 tracking-widest fade-in"
        >
          Scroll
        </p>
        <img
          src="../assets/icons/arrow-down.png"
          alt="arrow-down"
          class="w-5 scroll-arrow"
        />
      </div>
    </section>

    <!-- structure organisasi -->
    <section class="bg-gray-700 py-10">
      <div
        class="py-10 md:py-20 mx-10 md:mx-12 lg:mx-32 xl:mx-56 flex items-center justify-center flex-col"
      >
        <div class="md:w-[80%] fade-in">
          <h1
            class="text-white uppercase text-xl lg:text-3xl font-bold tracking-wider"
          >
            Struktur Organisasi
          </h1>
          <div class="w-[40%] md:w-[50%] h-1 bg-gray-200 mt-2"></div>
          <hr />
        </div>
      </div>

      <div
        class="md:flex md:justify-center md:items-start md:gap-12 flex-wrap mx-10"
      >
        <!-- Item 1 -->
        <div
          ref="item1"
          class="max-w-xs md:max-w-md lg:max-w-xl flex flex-col items-center md:items-start mb-8 fade-in"
        >
          <div class="h-[200px] md:h-[250px] lg:h-[300px] w-full">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="person-man"
              class="w-full h-full object-cover object-center grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div class="text-center mt-4">
            <h2
              class="uppercase font-bold text-sm tracking-wide text-white text-center mt-2 lg:text-lg"
            >
              ANONIM
            </h2>
            <p class="text-white text-xs md:text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              fuga laborum cum reprehenderit laboriosam temporibus nihil
              doloremque pariatur nam hic.
            </p>
            <div class="flex justify-center h-max mt-5">
              <div class="w-2/3 bg-white px-4 py-2 flex items-center">
                <h3
                  class="uppercase tracking-widest font-bold text-xs text-center lg:text-xl"
                >
                  Selengkapnya
                </h3>
              </div>
              <div
                class="bg-yellow-600 px-2 py-1 flex justify-center items-center"
              >
                <img
                  src="../assets/icons/arrow-right.png"
                  alt="arrow-right"
                  class="w-5 lg:w-7"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Item 2 -->
        <div
          ref="item2"
          class="max-w-xs md:max-w-md lg:max-w-xl flex flex-col items-center py-10 md:py-0 fade-in"
        >
          <div class="h-[200px] md:h-[250px] lg:h-[300px] w-full">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="person-woman"
              class="w-full h-full object-cover object-center grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div class="text-center md:text-left mt-4">
            <h2
              class="uppercase font-bold text-sm tracking-wide text-white text-center mt-2 lg:text-lg"
            >
              ANONIM
            </h2>
            <p class="text-white text-xs md:text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              fuga laborum cum reprehenderit laboriosam temporibus nihil
              doloremque pariatur nam hic.
            </p>
            <div class="flex justify-center h-max mt-5">
              <div class="w-2/3 bg-white px-4 py-2 flex items-center">
                <h3
                  class="uppercase tracking-widest font-bold text-xs text-center lg:text-xl"
                >
                  Selengkapnya
                </h3>
              </div>
              <div
                class="bg-yellow-600 px-2 py-1 flex justify-center items-center"
              >
                <img
                  src="../assets/icons/arrow-right.png"
                  alt="arrow-right"
                  class="w-5 lg:w-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- sejarah & success -->
    <section class="bg-gray-700">
      <!-- Bagian 1: Sejarah -->
      <div class="bg-red-800 lg:flex lg:items-stretch lg:h-[600px]">
        <!-- Konten Kiri -->
        <div
          class="py-10 md:py-20 mx-10 md:mx-12 lg:mx-24 lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:w-[50%]"
        >
          <div>
            <h1
              class="text-white uppercase text-xl lg:text-3xl font-bold tracking-wider"
            >
              Sejarah
            </h1>
            <div class="w-[40%] md:w-[50%] h-1 bg-gray-200 mt-2"></div>
            <hr />
          </div>
          <p class="text-justify text-white text-sm pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            enim quis rem impedit natus, delectus, modi pariatur tenetur beatae,
            tempora nobis voluptas inventore et facilis error autem ad
            perferendis at eaque unde. Numquam tenetur assumenda architecto
            odio. Quam natus, officiis nobis itaque commodi, cumque
            exercitationem molestiae sint architecto ducimus corporis.
          </p>
        </div>

        <!-- Gambar Kanan -->
        <div class="hidden lg:block flex-1 w-[50%]">
          <img
            src="../assets/images/74988-gedung-pemkab-jember-homepage.jpg"
            alt="Gedung Pemkab Jember"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Bagian 2: Success Mindset -->
      <div class="bg-red-800 lg:flex lg:items-stretch lg:h-[600px]">
        <!-- Gambar Kiri -->
        <div class="hidden lg:block flex-1">
          <img
            src="../assets/images/74988-gedung-pemkab-jember-homepage.jpg"
            alt="Gedung Pemkab Jember"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <!-- Konten Kanan -->
        <div class="py-10 lg:py-14 px-8 flex-1 flex flex-col justify-between">
          <div>
            <h3
              class="uppercase font-bold text-white text-center text-sm tracking-wider"
            >
              success mindset
            </h3>
            <h2
              class="uppercase text-orange-400 font-bold text-2xl tracking-wider text-center"
            >
              <span class="align-super text-sm">BP</span>800
            </h2>
            <p class="text-white text-center text-xs font-semibold pt-1">
              Lorem ipsum dolor
            </p>
            <p class="text-white text-center text-sm font-semibold pt-8">
              Lorem ipsum dolor
            </p>
          </div>
          <div class="flex justify-center pt-3">
            <button
              class="bg-orange-500 w-max px-10 py-2 text-black font-semibold tracking-wider hover:bg-orange-400 transition"
            >
              Lorem
            </button>
          </div>

          <!-- Daftar Fitur -->
          <div class="flex justify-center py-6">
            <div class="w-60">
              <div
                class="flex space-x-2 justify-center items-center py-2 w-full"
              >
                <img
                  src="../assets/icons/correct.png"
                  alt="correct"
                  class="w-8 h-auto lg:w-5"
                />
                <p class="text-white text-sm tracking-wide leading-relaxed">
                  Lorem ipsum oaksodk asodko asodkoaskd kasdo
                </p>
              </div>
              <div
                class="flex space-x-2 justify-center items-center py-2 w-full"
              >
                <img
                  src="../assets/icons/correct.png"
                  alt="correct"
                  class="w-8 h-auto lg:w-5"
                />
                <p class="text-white text-sm tracking-wide leading-relaxed">
                  Lorem ipsum oaksodk asodko asodkoaskd kasdo
                </p>
              </div>
              <div
                class="flex space-x-2 justify-center items-center py-2 w-full"
              >
                <img
                  src="../assets/icons/correct.png"
                  alt="correct"
                  class="w-8 h-auto lg:w-5"
                />
                <p class="text-white text-sm tracking-wide leading-relaxed">
                  Lorem ipsum oaksodk asodko asodkoaskd kasdo
                </p>
              </div>
              <div
                class="flex space-x-2 justify-center items-center py-2 w-full"
              >
                <img
                  src="../assets/icons/correct.png"
                  alt="correct"
                  class="w-8 h-auto lg:w-5"
                />
                <p class="text-white text-sm tracking-wide leading-relaxed">
                  Lorem ipsum oaksodk asodko asodkoaskd kasdo
                </p>
              </div>
              <div
                class="flex space-x-2 justify-center items-center py-2 w-full"
              >
                <img
                  src="../assets/icons/correct.png"
                  alt="correct"
                  class="w-8 h-auto lg:w-5"
                />
                <p class="text-white text-sm tracking-wide leading-relaxed">
                  Lorem ipsum oaksodk asodko asodkoaskd kasdo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Clients -->
    <section class="h-[500px] bg-gray-700 flex justify-center items-center">
      <div class="py-10 mx-10 md:mx-12 lg:mx-32 xl:mx-56">
        <div class="mx-auto max-w-xl mt-4">
          <h1
            class="text-white uppercase text-xl lg:text-3xl font-bold tracking-wider"
          >
            Our Clients
          </h1>
          <div class="w-[40%] md:w-[50%] h-1 bg-gray-200 mt-2"></div>
          <hr />
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6 bg-transparent">
          <div
            class="flex items-center justify-center p-4 bg-white rounded-lg shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            <img
              src="https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg"
              alt="Atlanta Hawks"
              class="w-full h-full object-contain"
            />
          </div>

          <div
            class="flex items-center justify-center p-4 bg-white rounded-lg shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            <img
              src="https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg"
              alt="Golden State Warriors"
              class="w-full h-full object-contain"
            />
          </div>

          <div
            class="flex items-center justify-center p-4 bg-white rounded-lg shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            <img
              src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg"
              alt="Los Angeles Lakers"
              class="w-full h-full object-contain"
            />
          </div>

          <div
            class="flex items-center justify-center p-4 bg-white rounded-lg shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            <img
              src="https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg"
              alt="Sacramento Kings"
              class="w-full h-full object-contain"
            />
          </div>

          <div
            class="flex items-center justify-center p-4 bg-white rounded-lg shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            <img
              src="https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg"
              alt="Toronto Raptors"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Service -->
    <section class="min-h-screen bg-red-800 flex justify-center items-center">
      <div class="py-20 mx-10 md:mx-12 lg:mx-32 xl:mx-56">
        <div class="mx-auto max-w-full">
          <h1
            class="text-white uppercase text-xl lg:text-3xl font-bold tracking-wider"
          >
            Layanan Kami
          </h1>
          <div class="w-[40%] md:w-[50%] h-1 bg-gray-200 mt-2"></div>
          <hr />
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-10 md:mx-12"
        >
          <div class="text-center">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="Service 1"
              class="w-full h-auto object-contain"
            />
            <h2
              class="text-lg font-bold mt-4 text-white uppercase tracking-wide"
            >
              Service 1
            </h2>
            <hr class="my-3 border-white-600" />
            <button
              class="bg-orange-500 w-max px-8 py-2 text-sm text-white font-bold tracking-widest hover:bg-orange-400 transition uppercase rounded-sm"
            >
              Selengkapnya
            </button>
          </div>
          <div class="text-center">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="Service 1"
              class="w-full h-auto object-contain"
            />
            <h2
              class="text-lg font-bold mt-4 text-white uppercase tracking-wide"
            >
              Service 1
            </h2>
            <hr class="my-3 border-white-600" />
            <button
              class="bg-orange-500 w-max px-8 py-2 text-sm text-white font-bold tracking-widest hover:bg-orange-400 transition uppercase rounded-sm"
            >
              Selengkapnya
            </button>
          </div>
          <div class="text-center">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="Service 1"
              class="w-full h-auto object-contain"
            />
            <h2
              class="text-lg font-bold mt-4 text-white uppercase tracking-wide"
            >
              Service 1
            </h2>
            <hr class="my-3 border-white-600" />
            <button
              class="bg-orange-500 w-max px-8 py-2 text-sm text-white font-bold tracking-widest hover:bg-orange-400 transition uppercase rounded-sm"
            >
              Selengkapnya
            </button>
          </div>
          <div class="text-center">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="Service 1"
              class="w-full h-auto object-contain"
            />
            <h2
              class="text-lg font-bold mt-4 text-white uppercase tracking-wide"
            >
              Service 1
            </h2>
            <hr class="my-3 border-white-600" />
            <button
              class="bg-orange-500 w-max px-8 py-2 text-sm text-white font-bold tracking-widest hover:bg-orange-400 transition uppercase rounded-sm"
            >
              Selengkapnya
            </button>
          </div>
          <div class="text-center">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="Service 1"
              class="w-full h-auto object-contain"
            />
            <h2
              class="text-lg font-bold mt-4 text-white uppercase tracking-wide"
            >
              Service 1
            </h2>
            <hr class="my-3 border-white-600" />
            <button
              class="bg-orange-500 w-max px-8 py-2 text-sm text-white font-bold tracking-widest hover:bg-orange-400 transition uppercase rounded-sm"
            >
              Selengkapnya
            </button>
          </div>
          <div class="text-center">
            <img
              src="../assets/images/megawati-hangestri-2072703356.webp"
              alt="Service 1"
              class="w-full h-auto object-contain"
            />
            <h2
              class="text-lg font-bold mt-4 text-white uppercase tracking-wide"
            >
              Service 1
            </h2>
            <hr class="my-3 border-white-600" />
            <button
              class="bg-orange-500 w-max px-8 py-2 text-sm text-white font-bold tracking-widest hover:bg-orange-400 transition uppercase rounded-sm"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="h-screen relative bg-gray-900">
      <!-- Slides Container -->
      <div
        class="h-full w-full relative flex items-center justify-center overflow-hidden touch-pan-x"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute inset-0 transition-transform duration-500"
          :class="{
            'translate-x-full': currentIndex < index,
            '-translate-x-full': currentIndex > index,
            'translate-x-0': currentIndex === index,
          }"
        >
          <!-- Background Image -->
          <img
            :src="slide.image"
            alt="Quote Background"
            class="h-full w-full object-cover"
          />
          <!-- Quote Content -->
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4 lg:px-32"
          >
            <h1 class="text-xl md:text-2xl font-bold">{{ slide.quote }}</h1>
            <p class="mt-4 text-sm md:text-xl">{{ slide.description }}</p>
            <p class="mt-2 text-xs md:text-sm font-semibold">
              - {{ slide.author }}
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons (hidden on small screens) -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full h-10 w-10 sm:hidden md:block font-bold"
        @click="prevSlide"
      >
        &#8592;
      </button>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-black rounded-full h-10 w-10 sm:hidden md:block"
        @click="nextSlide"
      >
        &#8594;
      </button>

      <!-- Indicators -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="h-3 w-3 rounded-full border border-white"
          :class="{
            'bg-white': currentIndex === index,
            'bg-gray-600': currentIndex !== index,
          }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </section>

    <section class="h-96 relative bg-gray-200">
      <div id="map" class="h-full"></div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  setup() {
    const slides = ref([
      {
        quote:
          "Kemenangan tidak datang dari bakat saja, tetapi dari kerja keras dan ketekunan.",
        description:
          "Teruslah berlatih dan pantang menyerah untuk mencapai puncak.",
        author: "Anonim",
        image: "/src/assets/images/megawati-hangestri-2072703356.webp",
      },
      {
        quote:
          "Jangan takut gagal, karena setiap kekalahan adalah pelajaran menuju kemenangan.",
        description: "Kegagalan adalah bagian dari perjalanan seorang juara.",
        author: "Anonim",
        image: "/src/assets/images/megawati-hangestri-2072703356.webp",
      },
      {
        quote:
          "Atlet hebat tidak terlahir dari kenyamanan, tetapi dari perjuangan tanpa henti.",
        description: "Keluar dari zona nyamanmu dan temukan potensi terbaikmu.",
        author: "Anonim",
        image: "/src/assets/images/megawati-hangestri-2072703356.webp",
      },
    ]);

    const currentIndex = ref(0);
    let touchStartX = null;
    let autoSlideInterval = null;

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + slides.value.length) % slides.value.length;
    };

    const goToSlide = (index) => {
      currentIndex.value = index;
    };

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      if (!touchStartX) return;
      const touchEndX = event.touches[0].clientX;
      const diffX = touchStartX - touchEndX;

      if (diffX > 50) {
        nextSlide();
        touchStartX = null;
      } else if (diffX < -50) {
        prevSlide();
        touchStartX = null;
      }
    };

    const item1 = ref(null);
    const item2 = ref(null);

    const observeItems = () => {
      const options = { threshold: 0.2 }; // Set threshold to detect when 20% of element is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      }, options);

      observer.observe(item1.value);
      observer.observe(item2.value);
    };

    const handleTouchEnd = () => {
      touchStartX = null;
    };

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 10000);
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    onMounted(() => {
      observeItems();

      const map = L.map("map").setView([-8.172, 113.699], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([-8.172, 113.699])
        .addTo(map)
        .bindPopup("<b>PBVSI Kota Jember</b><br>Jawa Timur")
        .openPopup();
      startAutoSlide();
    });

    onUnmounted(() => {
      stopAutoSlide();
    });

    return {
      slides,
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      item1,
      item2,
    };
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}

.bg-img {
  background-image: url("../assets/images/74988-gedung-pemkab-jember-homepage.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.scroll-arrow {
  animation: bounce 0.8s infinite; /* Atur animasi supaya terus berulang */
}

@keyframes bounce {
  0% {
    transform: translateY(0); /* Mulai di posisi normal */
  }
  50% {
    transform: translateY(10px); /* Geser ke bawah sedikit */
  }
  100% {
    transform: translateY(0); /* Kembali ke posisi normal */
  }
}

.absolute {
  transition: transform 0.5s ease-in-out;
}

/* src/assets/styles.css atau di file global CSS */

@media (min-width: 768px) {
  .writing-mode-vertical {
    writing-mode: vertical-rl; /* Menampilkan teks secara vertikal */
    text-orientation: mixed; /* Orientasi huruf tetap normal */
  }
}
</style>
