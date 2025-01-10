<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen text-gray-800"
  >
    <h1 class="font-custom text-black text-4xl font-light">
      Welcome to Home Page
    </h1>
    <p class="mt-4 text-red-700 font-lulo">Counter: {{ counter.count }}</p>
    <p class="mt-4 text-lg">Counter: {{ counter.count }}</p>
    <button
      @click="increment"
      class="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      Increment
    </button>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const counter = useCounterStore();

    const increment = () => {
      counter.increment();
    };

    return {
      counter,
      increment,
    };
  },
};
</script>
