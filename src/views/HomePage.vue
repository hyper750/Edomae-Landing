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
                    <b-row v-for="(image, index) in imageSlides" :key="index" class="mb-4">
                        <!-- Text left for even -->
                        <b-col md="3" class="align-self-center" v-if="index % 2 == 0">
                            <h2 class="text-center">{{ $t(image.title) }}</h2>
                            <h5 class="text-secondary text-center">{{ $t(image.subtitle) }}</h5>
                        </b-col>
                        <b-col md="9" v-if="index % 2 == 0">
                            <b-img :src="image.path" class="w-100"/>
                        </b-col>

                        <!-- Text right for odd -->
                        <b-col md="9" v-if="index % 2 == 1">
                            <b-img :src="image.path" class="w-100"/>
                        </b-col>
                        <b-col md="3" class="align-self-center" v-if="index % 2 == 1">
                            <h2 class="text-center">{{ $t(image.title) }}</h2>
                            <h5 class="text-secondary text-center">{{ $t(image.subtitle) }}</h5>
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
            imageSlides: [
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/local/IMG_20220318_165348.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/local/IMG_20220318_165622.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/local/IMG_20220318_165606.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/local/IMG_20220318_165455.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/local/IMG_20220318_165330.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/meal/yakisoba.jpeg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/meal/sushi box.jpeg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/meal/IMG_20211020_205937_1.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/meal/udon picante.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/meal/IMG_20211020_211357_1.jpg"),
                },
                {
                    title: 'Your trusted Japanese restaurant',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ut mauris a dignissim. Nunc sit amet ante scelerisque, vulputate nunc eget, viverra lorem. Etiam id ultrices velit. ',
                    path: require("../assets/photos/meal/daifuku.jpeg"),
                },
            ],
        };
    },
};
</script>

