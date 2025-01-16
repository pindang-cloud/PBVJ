<template>
  <div>
    <!-- Navbar -->
    <div
      :class="[
        isFixed
          ? 'fixed w-full top-0 z-50 bg-gray-700 duration-300 ease-in'
          : 'relative bg-gray-700',
        'flex justify-between items-center p-5 transition-shadow duration-300',
        hasShadow ? 'shadow-md' : '',
      ]"
    >
      <div class="flex items-center">
        <img
          src="../assets/images/Jember.png"
          alt="icon-jember"
          class="sm:w-16 sm:h-auto w-28 h-auto"
        />
        <img
          src="../assets/images/logo_pbvsi.png"
          alt="icon-pbvsi"
          class="sm:w-12 sm:h-12 w-20 h-20"
        />
      </div>

      <div class="sm:hidden lg:flex items-center">
        <div class="flex space-x-6 uppercase font-bold tracking-widest">
          <a
            href="/"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >Home</a
          >
          <a
            href="/about"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >About</a
          >
          <a
            href="/club"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >Club</a
          >
          <a
            href="/database"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >Data Base</a
          >
          <a
            href="/contact"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >Contact</a
          >
          <a
            href="/events"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >Events</a
          >
          <a
            href="/blog"
            class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
            >Blog</a
          >
        </div>
      </div>

      <!-- Toggle Button for Sidebar -->
      <button
        class="lg:hidden relative z-10 flex flex-col justify-center items-center w-8 h-8 bg-transparent rounded-lg"
        @click="toggleMenu"
      >
        <div
          :class="[
            'w-7 h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-md absolute',
            isOpen ? 'rotate-45' : 'rotate-0 mb-6',
          ]"
        ></div>
        <div
          :class="[
            'w-6 h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-md absolute',
            isOpen ? 'opacity-0' : '',
          ]"
        ></div>
        <div
          :class="[
            'w-7 h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-md absolute',
            isOpen ? '-rotate-45' : 'rotate-0 mt-6',
          ]"
        ></div>
      </button>
    </div>

    <Sidebar :isOpen="isOpen" @toggle="toggleMenu" />
  </div>
</template>

<script>
import Sidebar from "./sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      isOpen: false, // Status menu (open/close)
      hasShadow: false, // Status untuk navbar shadow
      isFixed: false, // Status untuk menentukan apakah navbar fixed
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen; // Mengubah status menu ketika tombol diklik
    },
    handleScroll() {
      const scrollY = window.scrollY;

      // Tetapkan navbar fixed jika scrollY lebih dari 100px
      this.isFixed = scrollY > 100;

      // Tetapkan shadow jika scrollY lebih dari 0
      this.hasShadow = scrollY > 0;
    },
  },
  mounted() {
    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Bersihkan event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
