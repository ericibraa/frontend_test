<script setup>
import { ref } from 'vue';

const newGame = ref({
    title: '',
    thumbnail: '',
    status: 'Live',
    short_description: '',
    description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    minimum_system_requirements: {
        os: '',
        processor: '',
        memory: '',
        graphics: '',
        storage: ''
    },
    screenshots: []
});

const screenshotUrls = ref('');

const addGame = () => {
    newGame.value.screenshots = screenshotUrls.value.split(',').map((url, index) => ({
        id: index + 1,
        image: url.trim()
    }));

    console.log(newGame.value);

    resetForm();
};

const resetForm = () => {
    newGame.value = {
        title: '',
        thumbnail: '',
        status: 'Live',
        short_description: '',
        description: '',
        game_url: '',
        genre: '',
        platform: '',
        publisher: '',
        developer: '',
        release_date: '',
        minimum_system_requirements: {
            os: '',
            processor: '',
            memory: '',
            graphics: '',
            storage: ''
        },
        screenshots: []
    };
    screenshotUrls.value = '';
};
</script>

<template>
    <div class="max-w-7xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">Add New Game</h1>
        <form @submit.prevent="addGame" class="bg-white rounded-lg p-6">
            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="title">Title:</label>
                <input v-model="newGame.title" type="text" id="title" class="border rounded-lg w-full p-2" required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="thumbnail">Thumbnail URL:</label>
                <input v-model="newGame.thumbnail" type="url" id="thumbnail" class="border rounded-lg w-full p-2"
                    required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="status">Status:</label>
                <select v-model="newGame.status" id="status" class="border rounded-lg w-full p-2" required>
                    <option value="Live">Live</option>
                    <option value="Coming Soon">Coming Soon</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="short_description">Short Description:</label>
                <textarea v-model="newGame.short_description" id="short_description" rows="3"
                    class="border rounded-lg w-full p-2" required></textarea>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="description">Description:</label>
                <textarea v-model="newGame.description" id="description" rows="5" class="border rounded-lg w-full p-2"
                    required></textarea>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="game_url">Game URL:</label>
                <input v-model="newGame.game_url" type="url" id="game_url" class="border rounded-lg w-full p-2"
                    required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="genre">Genre:</label>
                <input v-model="newGame.genre" type="text" id="genre" class="border rounded-lg w-full p-2" required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="platform">Platform:</label>
                <input v-model="newGame.platform" type="text" id="platform" class="border rounded-lg w-full p-2"
                    required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="publisher">Publisher:</label>
                <input v-model="newGame.publisher" type="text" id="publisher" class="border rounded-lg w-full p-2"
                    required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="developer">Developer:</label>
                <input v-model="newGame.developer" type="text" id="developer" class="border rounded-lg w-full p-2"
                    required />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="release_date">Release Date:</label>
                <input v-model="newGame.release_date" type="date" id="release_date" class="border rounded-lg w-full p-2"
                    required />
            </div>

            <h2 class="text-lg font-semibold mt-6">Minimum System Requirements</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-sm font-semibold mb-1" for="os">OS:</label>
                    <input v-model="newGame.minimum_system_requirements.os" type="text" id="os"
                        class="border rounded-lg w-full p-2" required />
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-1" for="processor">Processor:</label>
                    <input v-model="newGame.minimum_system_requirements.processor" type="text" id="processor"
                        class="border rounded-lg w-full p-2" required />
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-1" for="memory">Memory:</label>
                    <input v-model="newGame.minimum_system_requirements.memory" type="text" id="memory"
                        class="border rounded-lg w-full p-2" required />
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-1" for="graphics">Graphics:</label>
                    <input v-model="newGame.minimum_system_requirements.graphics" type="text" id="graphics"
                        class="border rounded-lg w-full p-2" required />
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-1" for="storage">Storage:</label>
                    <input v-model="newGame.minimum_system_requirements.storage" type="text" id="storage"
                        class="border rounded-lg w-full p-2" required />
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-semibold mb-1" for="screenshots">Screenshots (URLs, separated by
                    commas):</label>
                <textarea v-model="screenshotUrls" id="screenshots" rows="3"
                    class="border rounded-lg w-full p-2"></textarea>
                <p class="text-sm text-gray-600 mt-1">Enter URLs separated by commas.</p>
            </div>

            <button type="submit"
                class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">Add
                Game</button>
        </form>
    </div>
</template>