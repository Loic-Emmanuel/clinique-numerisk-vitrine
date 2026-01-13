<template>
  <section class="bg-gradient-to-r from-primaryOrange to-primaryPurple text-white py-28 overflow-hidden pt-24 md:pt-32">
    <div class="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
      <!-- Texte -->
      <div class="md:w-1/2 text-center md:text-left"  data-aos="fade-right">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Des offres adaptées à chaque clinique
        </h1>

        <p class="text-xl md:text-2xl mb-10">
          Que vous soyez une petite clinique ou une structure plus avancée,
          Clinique Numerisk vous accompagne avec des solutions évolutives,
          fiables et orientées performance.
        </p>

        <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <router-link :to="{ path: '/offres', hash: '#offers-list' }"
            class="bg-white text-primaryPurple px-8 py-4 
            rounded-lg font-semibold hover:bg-gray-100 transition">
            Voir les offres
          </router-link>

          <router-link :to="{ path: '/', hash: '#contact' }"
            class="border border-white px-8 py-4 rounded-lg 
            font-semibold hover:bg-white hover:text-primaryPurple transition">
            Demander une démonstration
          </router-link>
        </div>
      </div>

      <!-- Image -->
      <div class="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left">
        <img
          src="@/assets/offre_hero.svg"
          alt="Offres Clinique Numerisk"
          class="w-full max-w-md md:max-w-lg rounded-xl"
          data-aos="fade-left"
        />
      </div>

    </div>
  </section>
</template>
