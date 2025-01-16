<template>
    <transition
      name="slide"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-end"
      >
        <div class="sidebar w-64 h-full shadow-lg flex flex-col bg-[#191D24]">
          <div class="flex justify-between items-center p-4">
            <h2 class="text-lg text-white font-semibold">Menu</h2>
            <button @click="toggleSidebar" class="text-white-600 hover:text-white-800">
              ✖
            </button>
          </div>
          <nav class="flex-1 p-4 bg-gray-800">
            <ul class="text-lg font-bold mx-auto text-center">
              <li class="py-2">
                <a href="/" class="text-white hover:text-gray-500">Home</a>
              </li>
              <li class="py-2">
                <a href="/about" class="text-white hover:text-gray-500">About</a>
              </li>
              <li class="py-2">
                <a href="/club" class="text-white hover:text-gray-500">Club</a>
              </li>
              <li class="py-2">
                <a href="/database" class="text-white hover:text-gray-500">Database</a>
              </li>
              <li class="py-2">
                <a href="/contact" class="text-white hover:text-gray-500">Contact</a>
              </li>
              <li class="py-2">
                <a href="/events" class="text-white hover:text-gray-500">Events</a>
              </li>
              <li class="py-2">
                <a href="/blog" class="text-white hover:text-gray-500">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </template>
  

<script>
    export default {
    name: 'Sidebar',
    props: {
        isOpen: {
        type: Boolean,
        required: true,
        },
    },
    methods: {
        toggleSidebar() {
        this.$emit('toggle');
        },
    },
    };
</script>


<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

/* Saat sidebar mulai masuk */
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* Saat sidebar mulai keluar */
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>


