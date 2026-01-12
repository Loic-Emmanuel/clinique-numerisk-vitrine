<template>
  <section class="bg-gradient-to-r from-primaryOrange to-primaryPurple text-white
         min-h-screen pt-24 md:pt-32
         flex flex-col md:flex-row items-center justify-center px-6">
    <!-- Texte -->
    <div class="md:w-1/2 text-center md:text-left" data-aos="fade-right">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Clinique Numerisk</h1>
      <p class="text-xl md:text-2xl mb-8">
        Transformez votre clinique en un centre de performance médicale moderne.  
        Gérez vos patients, vos consultations et vos traitements plus rapidement et efficacement que jamais.
      </p>
      <div class="flex flex-col md:flex-row justify-center md:justify-start gap-4">
        <a href="#contact" class="bg-white text-primaryPurple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Demander une démonstration
        </a>
        <a href="#contact" class="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primaryPurple transition">
          Nous contacter
        </a>
      </div>
    </div>

    <!-- Image -->
    <div class="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left">
      <img src="@/assets/hero-image.png" alt="Logiciel Clinique Numerisk" class="w-full rounded-xl">
    </div>
  </section>
</template>
