<template>
  <section id="problems" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-12">Les défis que rencontrent les cliniques aujourd'hui</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <DocumentIcon class="h-12 w-12 text-primaryPurple mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryPurple">Dossiers patients dispersés</h3>
          <p class="text-gray-600 text-center">
            Les dossiers papier et fichiers numériques dispersés ralentissent votre personnel et provoquent des erreurs.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <ClockIcon class="h-12 w-12 text-primaryPurple mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryPurple">Organisation des consultations complexe</h3>
          <p class="text-gray-600 text-center">
            Planifier manuellement les rendez-vous entraîne des conflits, des oublis et une mauvaise gestion du temps.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <XCircleIcon class="h-12 w-12 text-primaryPurple mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryPurple">Suivi des traitements inefficace</h3>
          <p class="text-gray-600 text-center">
            Sans outils adaptés, suivre l’évolution des patients et analyser les performances devient un vrai
            casse-tête.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { XCircleIcon, ClockIcon, DocumentIcon } from '@heroicons/vue/24/solid'
</script>