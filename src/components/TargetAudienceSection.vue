<template>
  <section id="audience" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-12 text-primaryPurple">À qui s’adresse Clinique Numerisk ?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Cliniques privées -->
        <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <BuildingOfficeIcon class="h-12 w-12 text-primaryOrange mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryOrange">Cliniques privées</h3>
          <p class="text-gray-600 text-center">
            Optimisez la gestion des patients, réduisez les erreurs et offrez une expérience hautement professionnelle.
          </p>
        </div>

        <!-- Centres de santé -->
        <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <UsersIcon class="h-12 w-12 text-primaryOrange mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryOrange">Centres de santé</h3>
          <p class="text-gray-600 text-center">
            Facilitez la communication entre le personnel médical et accédez rapidement à toutes les informations
            importantes.
          </p>
        </div>

        <!-- Cabinets médicaux -->
        <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <HeartIcon class="h-12 w-12 text-primaryOrange mb-4" />
          <h3 class="text-xl font-semibold mb-3 text-primaryOrange">Cabinets médicaux</h3>
          <p class="text-gray-600 text-center">
            Réduisez les tâches administratives et concentrez-vous sur la qualité des soins pour vos patients.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { UsersIcon, BuildingOfficeIcon, HeartIcon } from '@heroicons/vue/24/solid'
</script>