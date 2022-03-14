<template>
    <b-container fluid class="vh-100 bg-light">
        <b-row class="navbar-margin">
            <b-col md="12">
                <NavBar />
            </b-col>
        </b-row>

        <b-row class="px-3">
            <b-col md="12" class="bg-white p-4">
                
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
import MealEndpoints from "../axios/api/meal";
import MealCategoryEndpoints from "../axios/api/mealCategory";

export default {
    components: {
        NavBar,
        FooterBar,
    },

    mounted() {
        this.loadMealCategory();
        this.loadMeal();
    },

    data() {
        return {
            meal: [],
            mealCategory: [],
        };
    },

    methods: {
        loadMealCategory() {
            MealCategoryEndpoints.list({
                enabled: true,
            }).then(({ data }) => (this.mealCategory = data));
        },

        loadMeal() {
            MealEndpoints.list({
                enabled: true,
            }).then(({ data }) => (this.meal = data));
        },
    },
};
</script>

