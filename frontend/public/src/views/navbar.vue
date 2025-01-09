<template>
  <div
    class="bg-gray-700 flex justify-between items-center p-4 overflow-x-hidden"
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
      <div class="mr-8 flex items-center px-1 bg-white rounded-lg">
        <img
          src="../assets/icons/search-glass-gray.png"
          alt="search"
          class="lg:h-4 lg:w-4 xl:h-7 xl:w-7 xl:p-1"
        />
        <input
          type="text"
          placeholder="Search..."
          class="lg:text-xs xl:text-sm p-2 rounded focus:outline-none"
        />
      </div>

      <div class="flex space-x-6 uppercase font-bold tracking-widest">
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >Home</a
        >
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >About</a
        >
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >Club</a
        >
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >Data Base</a
        >
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >Contact</a
        >
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >Events</a
        >
        <a
          href="#"
          class="lg:text-xs xl:text-sm text-white hover:text-yellow-400"
          >Blog</a
        >
      </div>

      <div class="ml-3 bg-gray-600 rounded-full flex items-center py-1 px-2">
        <div class="h-8 w-8 rounded-full bg-transparent overflow-hidden">
          <img
            src="../assets/images/74988-gedung-pemkab-jember.jpg"
            alt="icon-person"
            class="w-full h-full object-cover"
          />
        </div>
        <img
          src="../assets/icons/arrow-down-338-svgrepo-com.png"
          alt="icon-arrow"
          class="h-3 w-3 ml-3"
        />
      </div>
    </div>

    <button
      class="lg:hidden relative z-10 flex flex-col justify-center items-center w-8 h-8 bg-transparent rounded-lg"
      @click="toggleMenu"
    >
      <div
        :class="[
          'w-7 h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-md absolute ',
          isOpen ? 'rotate-45 absolute ' : ' rotate-0 mb-6',
        ]"
      ></div>
      <div
        :class="[
          'w-6 h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-md absolute',
          isOpen ? 'opacity-0' : ' duration-300',
        ]"
      ></div>
      <div
        :class="[
          'w-7 h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-md absolute ',
          isOpen ? '-rotate-45 absolute ' : 'rotate-0 mt-6',
        ]"
      ></div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Status menu (open/close)
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen; // Mengubah status menu ketika tombol diklik
    },
  },
};
</script>
