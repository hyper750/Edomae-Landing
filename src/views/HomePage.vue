<template>
    <b-container fluid class="h-100 bg-light">
        <b-row style="margin-bottom: 40px">
            <b-col md="12">
                <NavBar />
            </b-col>
        </b-row>

        <b-row class="px-0">
            <b-col md="12" class="bg-white py-4">
                <b-container fluid class="px-0">
                    <b-row v-for="(image, index) in imageSlides" :key="index" :id="`slide-${index + 1}`" class="h-100">
                        <!-- Text left for even -->
                        <b-col md="3" class="align-self-center px-4" v-if="index % 2 == 0">
                            <h2 class="text-center">{{ $t(image.title) }}</h2>
                            <h5 class="text-secondary text-center">{{ $t(image.subtitle) }}</h5>
                        </b-col>
                        <b-col md="9" v-if="index % 2 == 0" class="px-0 align-self-center">
                            <b-img :src="image.path" class="w-100"/>
                        </b-col>

                        <!-- Text right for odd -->
                        <b-col md="9" v-if="index % 2 == 1" class="px-0 align-self-center">
                            <b-img :src="image.path" class="w-100"/>
                        </b-col>
                        <b-col md="3" class="align-self-center px-4" v-if="index % 2 == 1">
                            <h2 class="text-center">{{ $t(image.title) }}</h2>
                            <h5 class="text-secondary text-center">{{ $t(image.subtitle) }}</h5>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>

        <b-row class="fixed-chevron-bottom w-100">
            <b-col md="12">
                <div class="icon bg-white rounded-circle mx-auto text-center mb-2" @click="() => nextSlide()" v-if="slideNumber < imageSlides.length">
                    <BIconChevronDown class="align-middle" />
                </div>

                <div class="icon bg-white rounded-circle mx-auto text-center mb-2" @click="() => firstSlide()" v-else>
                    <BIconChevronUp  />
                </div>
            </b-col>
        </b-row>

        <b-row class="mt-4 pb-4">
            <b-col md="12">
                <FooterBar />
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
.fixed-chevron-bottom {
    position: fixed;
    bottom: 0;
}

.fixed-chevron-bottom .icon {
    width: 64px;
    height: 64px;
    cursor: pointer;
    opacity: 0.8;
    line-height: 64px;
}

.fixed-chevron-bottom .icon:hover {
    opacity: 0.4;
}

.fixed-chevron-bottom .icon svg {
    width: 32px;
    height: 32px;
}

@media (min-width: 768px) {
.fixed-chevron-bottom .icon {
    width: 32px;
    height: 32px;
    line-height: 32px;
}

.fixed-chevron-bottom .icon svg {
    width: 16px;
    height: 16px;
}
}

</style>

<script>
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import { BIconChevronDown, BIconChevronUp } from "bootstrap-vue";

export default {
    metaInfo: {
        meta: [
            {
                name: 'Description',
                content: 'Edomae Mahón es un restaurante de sushi y comida japonesa localizado en el centro de Mahón'
            }
        ]
    },

    components: {
        NavBar,
        FooterBar,
        BIconChevronDown,
        BIconChevronUp,
    },

    mounted() {
        // Load slide number from path
        this.slideNumber = this.getSlideNumberFromRouter();
    },

    data() {
        return {
            slideNumber: 1,

            imageSlides: [
                {
                    title: 'Umami',
                    subtitle: 'Awake the fifth taste with our sushi and hot dishes',
                    path: require("../assets/photos/meal/presentation.jpeg"),
                },
                {
                    title: 'Quality',
                    subtitle: 'Time and dedication for each dish like the first one',
                    path: require("../assets/photos/meal/torching.jpeg"),
                },
                {
                    title: 'Fresh',
                    subtitle: 'We only have fresh ingredients with the best quality',
                    path: require("../assets/photos/meal/IMG_20211020_205937_1.jpg"),
                },
                {
                    title: 'Traditional',
                    subtitle: 'Traditional interior decoration for traditional japanese dishes',
                    path: require("../assets/photos/local/IMG_20220318_165348.jpg"),
                },
                {
                    title: 'Artesanal',
                    subtitle: 'All the dishes are made by hand to enjoy it like no one',
                    path: require("../assets/photos/meal/daifuku.jpeg"),
                },
            ],
        };
    },

    methods: {
        getSlideNumberFromRouter() {
            if(this.$router.currentRoute.hash) {
                let slideNumber = this.$router.currentRoute.hash.split('#slide-')[1];
                if(slideNumber) {
                    slideNumber = parseInt(slideNumber);
                    if(slideNumber >= 1 && slideNumber <= this.imageSlides.length) {
                        return slideNumber;
                    }
                }
            }

            return 1;
        },

        nextSlide() {
            // Load slide number from path
            this.slideNumber = this.getSlideNumberFromRouter();

            // Check if we can go to next slide
            if(this.slideNumber + 1 > this.imageSlides.length) {
                return;
            }

            // Go to next slide
            this.slideNumber++;

            this.$router.push({
                name: 'Home',
                hash: `#slide-${this.slideNumber}`
            });
        },

        firstSlide() {
            this.slideNumber = 1;
            this.$router.push({
                name: 'Home',
                hash: `#slide-${this.slideNumber}`
            });
        },
    },
};
</script>

