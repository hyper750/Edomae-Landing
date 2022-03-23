<template>
    <b-container fluid class="h-100 bg-light">
        <b-row class="navbar-margin">
            <b-col md="12">
                <NavBar />
            </b-col>
        </b-row>

        <b-row class="px-3">
            <b-col md="12" class="bg-white p-4">
                <b-container fluid>
                    <b-row>
                        <b-col md="12">
                            <h2 class="text-center">
                                {{ $t("Your trusted Japanese restaurant") }}
                            </h2>
                        </b-col>
                        <b-col md="12 mt-3">
                            <b-carousel
                                id="home-carousel"
                                v-model="carouselSlide"
                                :interval="4000"
                                controls
                                indicators
                                img-width="1024"
                                img-height="400"
                                style="text-shadow: 1px 1px 2px #333"
                            >
                                <b-carousel-slide
                                    v-for="image in imageSlides"
                                    :key="image.path"
                                    :img-src="image.path"
                                />
                            </b-carousel>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>

        <b-row class="mt-4">
            <b-col md="12">
                <FooterBar />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

export default {
    components: {
        NavBar,
        FooterBar,
    },

    data() {
        return {
            carouselSlide: 0,

            imageSlides: [
                {
                    path: require("../assets/carousel/local/IMG_20220318_165348.jpg"),
                },
                {
                    path: require("../assets/carousel/local/IMG_20220318_165622.jpg"),
                },
                {
                    path: require("../assets/carousel/local/IMG_20220318_165606.jpg"),
                },
                {
                    path: require("../assets/carousel/local/IMG_20220318_165455.jpg"),
                },
                {
                    path: require("../assets/carousel/local/IMG_20220318_165330.jpg"),
                },
                {
                    path: require("../assets/carousel/meal/yakisoba.jpeg"),
                },
                {
                    path: require("../assets/carousel/meal/sushi box.jpeg"),
                },
                {
                    path: require("../assets/carousel/meal/IMG_20211020_205937_1.jpg"),
                },
                {
                    path: require("../assets/carousel/meal/udon picante.jpg"),
                },
                {
                    path: require("../assets/carousel/meal/IMG_20211020_211357_1.jpg"),
                },
                {
                    path: require("../assets/carousel/meal/daifuku.jpeg"),
                },
            ],
        };
    },
};
</script>

