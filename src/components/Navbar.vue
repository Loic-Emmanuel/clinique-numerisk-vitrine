      <script setup>
      import { ref } from 'vue'

      const menuOpen = ref(false)

      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value
      }

      const closeMenu = () => {
        menuOpen.value = false
      }
</script>

<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logos -->
      <div class="flex items-center gap-4">
        <img src="@/assets/logo_numerisk.jpg" alt="Numerisk" class="h-10 w-auto">
        <img src="@/assets/logo_clinique.jpeg" alt="Clinique Numerisk" class="h-10 w-auto">
      </div>

      <!-- Liens desktop -->
      <div class="hidden md:flex gap-6 text-gray-700 font-semibold">
        <router-link to="/" class="hover:text-primaryOrange transition">Accueil</router-link>
        <a href="#problems" class="hover:text-primaryOrange transition">Problèmes</a>
        <a href="#solutions" class="hover:text-primaryOrange transition">Solutions</a>
        <a href="#audience" class="hover:text-primaryOrange transition">Public</a>
        <a href="#contact" class="hover:text-primaryOrange transition">Contact</a>
      </div>

      <!-- Bouton hamburger (mobile) -->
      <button @click="toggleMenu" class="md:hidden text-primaryPurple focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t px-6 py-6 space-y-4 text-center">
      <router-link @click="closeMenu" to="/" class="block font-semibold text-gray-700 hover:text-primaryOrange">
        Accueil
      </router-link>
      <a @click="closeMenu" href="#problems" class="block font-semibold text-gray-700 hover:text-primaryOrange">
        Problèmes
      </a>
      <a @click="closeMenu" href="#solutions" class="block font-semibold text-gray-700 hover:text-primaryOrange">
        Solutions
      </a>
      <a @click="closeMenu" href="#audience" class="block font-semibold text-gray-700 hover:text-primaryOrange">
        Public
      </a>
      <a @click="closeMenu" href="#contact" class="block font-semibold text-gray-700 hover:text-primaryOrange">
        Contact
      </a>
    </div>
  </nav>
</template>

