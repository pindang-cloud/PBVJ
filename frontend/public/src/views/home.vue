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
          class="flex flex-row sm:mt-8 md:flex-col md:fixed md:left-0 justify-center lg:-translate-y-1/2 md:space-y-3 md:ml-3 order-last sm:space-x-3 md:space-x-0"
        >
          <a href="#">
            <img
              src="../assets/icons/facebook-logo.png"
              alt="facebook-logo"
              class="w-5 h-auto"
            />
          </a>
          <a href="#">
            <img
              src="../assets/icons/instagram-logo.png"
              alt="instagram-logo"
              class="w-5 h-auto"
            />
          </a>
          <a href="#">
            <img
              src="../assets/icons/youtube-logo.png"
              alt="youtube-logo"
              class="w-5 h-auto"
            />
          </a>
        </div>

        <div class="md:ml-12">
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
          <div class="flex items-stretch h-max mt-8">
            <div class="w-2/3 bg-white px-4 py-2 flex items-center">
              <h3
                class="uppercase tracking-widest font-bold text-xs text-center lg:text-xl"
              >
                BOOK NOW
              </h3>
            </div>
            <div
              class="bg-yellow-600 px-2 py-1 flex justify-center items-center"
              @click=""
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

      <!-- Teks Scroll -->
      <div
        class="flex flex-col items-center md:fixed md:right-0 sm:mt-10 md:mt-0 md:mr-3 lg:transform lg:-translate-y-1/2 text-white text-sm font-semibold"
      >
        <p
          class="mb-2 writing-mode-vertical md:text-center md:mb-2 tracking-widest"
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
    <section class="min-h-screen bg-gray-700 py-10">
      <div
        class="py-10 md:py-20 mx-10 md:mx-12 lg:mx-32 xl:mx-56 flex items-center justify-center flex-col"
      >
        <div class="md:w-[80%]">
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
          class="max-w-xs md:max-w-md lg:max-w-xl flex flex-col items-center md:items-start mb-8"
        >
          <div class="h-[200px] md:h-[250px] lg:h-[300px] w-full">
            <img
              src="../assets/images/gapeen.jpg"
              alt="person-man"
              class="w-full h-full object-cover object-center grayscale hover:grayscale-0 duration-300"
            />
          </div>

          <div class="text-center mt-4">
            <h2
              class="uppercase font-bold text-sm tracking-wide text-white text-center mt-2 lg:text-lg"
            >
              Dr. Rapli Master
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
                  Learn More
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
          class="max-w-xs md:max-w-md lg:max-w-xl flex flex-col items-center py-10 md:py-0"
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
              Dr. Megawati Hangestri
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
                  Learn More
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
    <section class="min-h-screen bg-gray-700">
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
  </div>
</template>

<style scoped>
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

@media (min-width: 768px) {
  .writing-mode-vertical {
    writing-mode: vertical-rl; /* Menampilkan teks secara vertikal */
    text-orientation: mixed; /* Orientasi huruf tetap normal */
  }
}
</style>
