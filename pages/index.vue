<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const { data, error } = await useFetch('https://www.mmobomb.com/api1/games', {
    params: {
        platform: 'pc'
    }
});
</script>

<template>
    <div class="min-h-full">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-3">
            <swiper :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }"
                class="mySwiper rounded-lg">
                <swiper-slide>
                    <img src="/mainBanner/main_banner_1.jpg" alt="Throne and Liberty"
                        class="w-full max-h-[500px] object-cover object-bottom rounded-lg" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/mainBanner/main_banner_2.jpeg" alt="Slide 2"
                        class="w-full max-h-[500px] object-cover object-center rounded-lg" />
                </swiper-slide>
            </swiper>
        </div>

        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h3 class="pt-5 text-xl font-bold">Popular Games</h3>
            <div class="flex flex-wrap py-5 justify-center">
                <div v-for="game in data" :key="game.id"
                    class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col h-full mx-2 mb-4 w-full sm:w-72">
                    <a :href="'/game-detail/' + game.id">
                        <img class="w-full h-48 object-cover rounded-t-lg" :src="game.thumbnail" :alt="game.title">
                        <div class="p-3">
                            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ game.title }}</h3>
                            <p class="text-sm text-gray-700 line-clamp-4 mb-4">
                                {{ game.short_description }}
                            </p>
                            <div class="text-sm text-gray-600 mb-2">
                                <p><strong>Platform:</strong> {{ game.platform }}</p>
                                <p><strong>Genre:</strong> {{ game.genre }}</p>
                                <p><strong>Publisher:</strong> {{ game.publisher }}</p>
                                <p><strong>Developer:</strong> {{ game.developer }}</p>
                                <p><strong>Release Date:</strong> {{ game.release_date }}</p>
                            </div>
                            <a :href="game.game_url"
                                class="mt-auto inline-block px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Play Now
                            </a>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.line-clamp-4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>