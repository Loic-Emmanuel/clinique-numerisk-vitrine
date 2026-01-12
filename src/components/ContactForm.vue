<template>
  <section id="contact" class="py-20 bg-gray-50" data-aos="fade-up">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8 text-primaryPurple">Demandez votre démonstration gratuite</h2>
      <p class="text-center mb-6 text-gray-700">
        Remplissez ce formulaire et notre équipe vous contactera sous 24h pour vous montrer comment Clinique Numerisk peut révolutionner la gestion de votre clinique.
      </p>

      <form class="bg-white p-8 rounded-xl shadow space-y-6">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Nom complet</label>
          <input type="text" placeholder="Votre nom" class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange">
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" placeholder="Votre email" class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange">
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea placeholder="Votre message" class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryOrange"></textarea>
        </div>

        <button type="submit" class="bg-primaryOrange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primaryPurple transition w-full">
          Envoyer ma demande
        </button>
      </form>
    </div>
  </section>
</template>
