<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { InformationCircleIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import apiClient from '@/services/api'

// Formulaire
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

// Toggle note
const showNote = ref(false)
const isLoading = ref(false) // État de chargement

// Soumission formulaire avec Axios
const submitForm = async () => {
  // Validation simple avant envoi
  if (!form.value.name || !form.value.email || !form.value.phone || !form.value.message) {
    Swal.fire('Oops...', 'Tous les champs sont obligatoires', 'warning')
    return
  }

  isLoading.value = true // Active le loading

  try {
    console.log('Envoi des données:', form.value)
    
    // Utilisation d'Axios
    const response = await apiClient.post('/contact', form.value)
    
    console.log('Réponse complète:', response)
    console.log('Données:', response.data)
    
    if (response.data.status === 'success') {
      Swal.fire({
        title: 'Merci !',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK'
      })
      
      // Reset formulaire
      form.value = { name: '', email: '', phone: '', message: '' }
    } else {
      Swal.fire('Oops...', response.data.message || 'Une erreur est survenue', 'error')
    }

  } catch (error) {
    console.error('Erreur complète:', error)
    
    // Gestion détaillée des erreurs
    if (error.code === 'ECONNABORTED') {
      Swal.fire('Timeout', 'La requête a pris trop de temps. Vérifiez votre connexion.', 'error')
    } 
    else if (error.response) {
      // Le serveur a répondu avec un statut d'erreur
      console.log('Statut:', error.response.status)
      console.log('Headers:', error.response.headers)
      console.log('Données erreur:', error.response.data)
      
      Swal.fire(
        'Erreur serveur', 
        `Status: ${error.response.status} - ${error.response.data?.message || 'Erreur inconnue'}`,
        'error'
      )
    } 
    else if (error.request) {
      // La requête a été faite mais aucune réponse reçue
      console.log('Requête:', error.request)
      Swal.fire(
        'Serveur injoignable', 
        'Vérifiez que le serveur CodeIgniter tourne sur localhost:8080',
        'error'
      )
    } 
    else {
      // Erreur lors de la configuration de la requête
      Swal.fire('Erreur', error.message, 'error')
    }
  } finally {
    isLoading.value = false // Désactive le loading
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50" data-aos="fade-up">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8 text-primaryPurple">
        Demandez votre démonstration gratuite
      </h2>
      <p class="text-center mb-6 text-gray-700">
        Remplissez ce formulaire et notre équipe vous contactera sous 24h pour vous montrer comment Clinique Numerisk
        peut révolutionner la gestion de votre clinique.
      </p>

      <form @submit.prevent="submitForm" class="bg-white p-8 rounded-xl shadow space-y-6">

        <!-- Nom -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Nom complet</label>
          <input type="text" v-model="form.name" placeholder="Votre nom"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange"
            :disabled="isLoading">
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" v-model="form.email" placeholder="Votre email"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange"
            :disabled="isLoading">
        </div>

        <!-- Téléphone -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Téléphone</label>
          <input type="tel" v-model="form.phone" placeholder="Votre téléphone"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange"
            :disabled="isLoading">
        </div>

        <!-- Message -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea v-model="form.message" placeholder="Votre message"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange"
            :disabled="isLoading"></textarea>
        </div>

        <button type="submit" :disabled="isLoading"
          class="bg-primaryOrange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primaryPurple transition w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
          
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          
          {{ isLoading ? 'Envoi en cours...' : 'Envoyer ma demande' }}
        </button>
      </form>
    </div>

    <!-- Note importante -->
    <div class="heartbeat-soft mt-10 px-4 md:px-0" data-aos="fade-up">
      <div
        class="bg-orange-50 max-w-7xl mx-auto border-l-4 border-primaryOrange p-6 rounded-xl shadow-md text-gray-700">
        <div class="flex items-center justify-between cursor-pointer md:cursor-default" @click="showNote = !showNote">
          <p class="flex items-center text-lg md:text-xl font-bold text-primaryPurple">
            <InformationCircleIcon class="w-6 h-6 mr-2" />
            Note importante
          </p>

          <!-- Toggle icon mobile -->
          <ChevronDownIcon class="w-5 h-5 text-primaryPurple md:hidden transition-transform"
            :class="{ 'rotate-180': showNote }" />
        </div>

        <div class="mt-4 space-y-3" :class="{ 'hidden md:block': !showNote, 'block': showNote }">
          <p class="text-base md:text-lg leading-relaxed">
            Les démonstrations de <strong>Clinique NUMERISK</strong> se déroulent exclusivement dans nos locaux situés à
            <strong>Attécoubé, Cité Addoha</strong>.
          </p>

          <a href="https://maps.app.goo.gl/kGn39sto6irvRwn78" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 text-primaryPurple font-semibold hover:underline">
            <MapPinIcon class="w-5 h-5" />
            Voir l'emplacement
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
  0% { transform: scale(1); }
  50% { transform: scale(1.015); }
  100% { transform: scale(1); }
}

.heartbeat-soft {
  animation: heartbeat-soft 2.5s ease-in-out infinite;
}
</style>