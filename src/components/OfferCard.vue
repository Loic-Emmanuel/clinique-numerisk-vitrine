<template>
    <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col border"
        :class="highlighted ? 'border-primaryOrange scale-105' : 'border-gray-200'">
        <h3 class="text-2xl font-bold mb-2 text-primaryPurple">
            {{ title }}
        </h3>

        <p class="text-gray-600 mb-4">{{ subtitle }}</p>

        <p class="text-primaryOrange font-semibold mb-6">
            {{ price }}
        </p>

        <ul class="space-y-3 flex-1">
            <li v-for="(feature, index) in features" :key="index" class="flex gap-2">
                <span class="text-green-600 font-bold">✔</span>
                <span>{{ feature }}</span>
            </li>
        </ul>

        <Router-link :to="{ path: '/', hash: '#contact' }"
            class="mt-8 bg-primaryPurple text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Demander une démonstration
        </Router-link>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    price: String,
    features: Array,
    highlighted: Boolean
})
</script>
