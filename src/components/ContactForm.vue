<script setup>
import { ref } from 'vue'
import { InformationCircleIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'

const showNote = ref(false)

</script>


<template>
  <section id="contact" class="py-20 bg-gray-50" data-aos="fade-up">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8 text-primaryPurple">Demandez votre démonstration gratuite</h2>
      <p class="text-center mb-6 text-gray-700">
        Remplissez ce formulaire et notre équipe vous contactera sous 24h pour vous montrer comment Clinique Numerisk
        peut révolutionner la gestion de votre clinique.
      </p>

      <form @submit.prevent="submitForm" class="bg-white p-8 rounded-xl shadow space-y-6">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Nom complet</label>
          <input type="text" v-model="name" placeholder="Votre nom" class="w-full border border-gray-300 p-3 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-primaryOrange">
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" v-model="email" placeholder="Votre email" class="w-full border border-gray-300 p-3 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-primaryOrange">
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea v-model="message" placeholder="Votre message" class="w-full border border-gray-300 p-3 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-primaryOrange"></textarea>
        </div>

        <button type="submit"
          class="bg-primaryOrange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primaryPurple transition w-full">
          Envoyer ma demande
        </button>
      </form>
    </div>

    <div class="heartbeat-soft mt-10 px-4 md:px-0" data-aos="fade-up">
      <div
        class="bg-orange-50 max-w-7xl mx-auto border-l-4 border-primaryOrange p-6 rounded-xl shadow-md text-gray-700">
        <!-- Header -->
        <div class="flex items-center justify-between cursor-pointer md:cursor-default" @click="showNote = !showNote">
          <p class="flex items-center text-lg md:text-xl font-bold text-primaryPurple">
            <InformationCircleIcon class="w-6 h-6 mr-2" />
            Note importante
          </p>

          <!-- Toggle icon (mobile only) -->
          <ChevronDownIcon class="w-5 h-5 text-primaryPurple md:hidden transition-transform"
            :class="{ 'rotate-180': showNote }" />
        </div>

        <!-- Content -->
        <div class="mt-4 space-y-3" :class="{
          'hidden md:block': !showNote,
          'block': showNote
        }">
          <p class="text-base md:text-lg leading-relaxed">
            Les démonstrations de <strong>Clinique NUMERISK</strong> se déroulent exclusivement dans nos locaux situés à
            <strong>Attécoubé, Cité Addoha</strong>.
          </p>

          <a href="https://maps.app.goo.gl/kGn39sto6irvRwn78" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 text-primaryPurple font-semibold hover:underline">
            <MapPinIcon class="w-5 h-5" />
            Voir l’emplacement
          </a>

          <p class="text-base md:text-lg leading-relaxed">
            Après soumission de votre demande, notre équipe procédera à sa validation et vous contactera afin de
            <strong>programmer un rendez-vous de démonstration personnalisé</strong>.
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@keyframes heartbeat-soft {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.015);
  }

  100% {
    transform: scale(1);
  }
}

.heartbeat-soft {
  animation: heartbeat-soft 2.5s ease-in-out infinite;
}
</style>
