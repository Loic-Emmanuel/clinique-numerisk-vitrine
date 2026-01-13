<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <Navbar />
    <router-view />
    <CTASection />
    <Footer />
  </div>
</template>
