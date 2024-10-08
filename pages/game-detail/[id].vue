<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
const gameId = route.params.id;

const { data: gameDetail } = await useFetch('https://www.mmobomb.com/api1/game', {
    params: {
        id: gameId
    }
});

</script>

<template>
    <div class="max-w-7xl mx-auto p-4">
        <nav class="mb-4" aria-label="Breadcrumb">
            <ol class="flex flex-wrap space-x-2 text-gray-600">
                <li>
                    <a href="/" class="hover:text-blue-400">Home</a>
                </li>
                <li>
                    <span>&gt;</span>
                </li>
                <li class="text-gray-900 font-semibold">{{ gameDetail.title }}</li>
            </ol>
        </nav>
        <div class="bg-white rounded-lg p-6 pt-2">
            <div class="flex flex-col md:flex-row">
                <img class="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0" :src="gameDetail.thumbnail"
                    :alt="gameDetail.title" />
                <div class="ml-0 md:ml-4 flex-1">
                    <h1 class="text-2xl font-bold text-gray-900">{{ gameDetail.title }}</h1>
                    <p class="text-gray-600 mt-1"><strong>Status:</strong> {{ gameDetail.status }}</p>
                    <p class="text-gray-600 mt-1"><strong>Platform:</strong> {{ gameDetail.platform }}</p>
                    <p class="text-gray-600 mt-1"><strong>Genre:</strong> {{ gameDetail.genre }}</p>
                    <p class="text-gray-600 mt-1"><strong>Publisher:</strong> {{ gameDetail.publisher }}</p>
                    <p class="text-gray-600 mt-1"><strong>Developer:</strong> {{ gameDetail.developer }}</p>
                    <p class="text-gray-600 mt-1"><strong>Release Date:</strong> {{ gameDetail.release_date }}</p>
                    <a :href="gameDetail.game_url" target="_blank"
                        class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                        Play Now
                    </a>
                </div>
            </div>
            <h2 class="text-lg font-semibold mt-6">Short Description</h2>
            <p class="text-gray-700">{{ gameDetail.short_description }}</p>
            <h2 class="text-lg font-semibold mt-6">Description</h2>
            <div class="text-gray-700" v-html="gameDetail.description"></div>
            <h2 class="text-lg font-semibold mt-6">Minimum System Requirements</h2>
            <ul class="list-disc pl-5 text-gray-700">
                <li><strong>OS:</strong> {{ gameDetail.minimum_system_requirements.os }}</li>
                <li><strong>Processor:</strong> {{ gameDetail.minimum_system_requirements.processor }}</li>
                <li><strong>Memory:</strong> {{ gameDetail.minimum_system_requirements.memory }}</li>
                <li><strong>Graphics:</strong> {{ gameDetail.minimum_system_requirements.graphics }}</li>
                <li><strong>Storage:</strong> {{ gameDetail.minimum_system_requirements.storage }}</li>
            </ul>
            <h2 class="text-lg font-semibold mt-6">Screenshots</h2>
            <div class="flex flex-wrap mt-4">
                <div v-for="screenshot in gameDetail.screenshots" :key="screenshot.id"
                    class="w-full sm:w-1/2 md:w-1/3 p-1">
                    <img class="rounded-lg w-full h-52 object-cover" :src="screenshot.image"
                        :alt="gameDetail.title + ' Screenshot'" />
                </div>
            </div>
        </div>
    </div>
</template>