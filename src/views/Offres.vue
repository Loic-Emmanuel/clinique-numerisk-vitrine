<script setup>
import OfferCard from '@/components/OfferCard.vue'
import OffersHero from '@/components/OffersHero.vue'

const offreEssentielle = [
    'Gestion des patients (création, modification, suppression)',
    'Attribution automatique du numéro de dossier',
    'Gestion des consultations de base',
    'Facturation simple et suivi des paiements',
    'Statistiques basiques (recettes, patients)',
    'Gestion des utilisateurs (médecin, secrétaire)'
]

const offrePro = [
    'Tout le contenu de l’offre Essentielle',
    'Gestion avancée des consultations médicales',
    'Historique médical détaillé',
    'Facturation avancée et rapports financiers',
    'Tableaux de bord interactifs',
    'Gestion des rendez-vous',
    'Export des données (PDF, Excel)'
]

const offrePremium = [
    'Tout le contenu de l’offre Professionnelle',
    'Multi-cliniques / multi-services',
    'Gestion complète du personnel médical',
    'Statistiques avancées et indicateurs de performance',
    'Sécurité renforcée et sauvegardes',
    'Support prioritaire',
    'Personnalisation complète du logiciel'
]
</script>

<template>
    <OffersHero />
    <section id="offers-list" class="py-24 bg-gray-50" data-aos="fade-up">
        <div class="max-w-7xl mx-auto px-6">

            <!-- Titre -->
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold text-primaryPurple mb-4">
                    Nos offres Clinique Numerisk
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Des solutions adaptées à la taille et aux besoins de votre structure médicale.
                    Choisissez l’offre qui correspond à votre niveau d’activité et évoluez en toute sérénité.
                </p>
            </div>

            <!-- Offres -->
            <div class="grid md:grid-cols-3 gap-8">

                <OfferCard title="Offre Essentielle" subtitle="Idéale pour petites cliniques"
                    price="Accessible & efficace" :features="offreEssentielle" />

                <OfferCard title="Offre Professionnelle" subtitle="Pour cliniques en croissance"
                    price="Performance avancée" :features="offrePro" highlighted />

                <OfferCard title="Offre Premium" subtitle="Gestion complète & avancée" price="Solution tout-en-un"
                    :features="offrePremium" />

            </div>
        </div>
    </section>
</template>
