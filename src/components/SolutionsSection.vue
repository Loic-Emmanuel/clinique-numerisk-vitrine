
<template>
  <section id="solutions" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-12 text-primaryPurple">Pourquoi choisir Clinique Numerisk ?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-primaryOrange/10 p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <CheckIcon class="h-12 w-12 text-primaryOrange mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryOrange">Centralisation complète</h3>
          <p class="text-gray-700 text-center">
            Toutes les informations patients, consultations et traitements sont regroupées dans un seul système sécurisé, facile à utiliser.
          </p>
        </div>

        <div class="bg-primaryPurple/10 p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <BoltIcon class="h-12 w-12 text-primaryPurple mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryPurple">Gain de temps et productivité</h3>
          <p class="text-gray-700 text-center">
            Automatisez la planification des rendez-vous, suivez chaque traitement et libérez du temps pour le personnel médical.
          </p>
        </div>

        <div class="bg-primaryOrange/10 p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <ChartBarIcon class="h-12 w-12 text-primaryOrange mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryOrange">Décisions basées sur les données</h3>
          <p class="text-gray-700 text-center">
            Accédez à des rapports précis et tableaux de bord pour prendre des décisions éclairées et améliorer la performance globale.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, ChartBarIcon, BoltIcon } from '@heroicons/vue/24/solid'
</script>
