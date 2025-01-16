<template>
  <div
    class="min-h-screen py-10 md:py-20 lg:py-32 xl:py-40 mx-10 lg:mx-32 xl:mx-56 lg:m-auto"
  >
    <div class="md:mx-5 pb-10">
      <h1
        class="text-white uppercase text-xl lg:text-3xl font-bold tracking-wider"
      >
        Kontak
      </h1>
      <div class="w-[20%] h-1 bg-gray-200 mt-2"></div>
      <hr />
      <div>
        <div class="flex justify-end">
          <p class="w-[90%] text-xs lg:text-base text-white text-justify pt-7">
            Klub-klub voli di bawah naungan PBVSI kota Jember adalah wadah bagi
            atlet-atlet mudah berbakat untuk berkembang dan meraih prestasi.
            Dengan semangat kebersamaan, kerja keras dan dedikasi, klub-klub ini
            membawa nama Jember bersinar dibergai ajang kompetisi, menjadi saksi
            lahirnnya juara-juara baru didunia bola voli.
          </p>
        </div>
      </div>
    </div>

    <form class="space-y-4">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name*"
          class="w-full p-3 border border-yellow-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          placeholder="Last name*"
          class="w-full p-3 border border-yellow-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <input
        type="email"
        placeholder="Email*"
        class="w-full p-3 border border-yellow-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <input
        type="tel"
        placeholder="Phone"
        class="w-full p-3 border border-yellow-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <textarea
        rows="5"
        placeholder="Comments"
        class="w-full p-3 border border-yellow-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
      ></textarea>

      <button
        type="submit"
        class="border border-yellow-600 bg-transparent py-3 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full hover:bg-yellow-600 hover:text-black duration-300 text-yellow-600 text-sm font-semibold font-custom hover:text-black"
      >
        SEND
      </button>
    </form>
  </div>
</template>
