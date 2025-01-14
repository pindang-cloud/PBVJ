<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-end"
  >
    <div class="w-64 bg-white h-full shadow-lg flex flex-col">
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-lg font-bold">Menu</h2>
        <button @click="toggleSidebar" class="text-gray-600 hover:text-gray-800">
          ✖
        </button>
      </div>
      <nav class="flex-1 p-4">
        <ul>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">Home</a>
          </li>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">About</a>
          </li>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">Club</a>
          </li>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">Database</a>
          </li>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">Contact</a>
          </li>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">Events</a>
          </li>
          <li class="py-2 border-b">
            <a href="#" class="text-gray-800 hover:text-gray-500">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle"); // Emit event ke parent untuk menutup sidebar
    },
  },
};
</script>

<style scoped>
</style>
