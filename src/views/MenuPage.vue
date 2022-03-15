<template>
    <b-container fluid class="vh-100 bg-light">
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
                            <h2 class="text-center text-muted mb-4">
                                {{ $t("Menu") }}
                            </h2>
                        </b-col>
                    </b-row>

                    <!-- Show categories if no category is selected -->
                    <b-row v-if="!selectedCategory">
                        <b-col
                            md="3"
                            v-for="mealCategory in mealCategories"
                            :key="mealCategory.id"
                        >
                            <b-card
                                :title="mealCategory.name"
                                :img-src="mealCategory.imatge"
                                :img-alt="mealCategory.name"
                                class="mb-4 menu-card shadow-sm"
                                overlay
                                text-variant="white"
                                img-top
                                @click="() => selectCategory(mealCategory)"
                            >
                            </b-card>
                        </b-col>
                    </b-row>
                    <!-- Show meals of the category selected -->
                    <b-row v-if="selectedCategory">
                        <b-col md="12" class="mb-3">
                            <b-btn
                                variant="outline-primary"
                                class="me-4"
                                @click="() => unselectCategory()"
                            >
                                <BIconChevronLeft />
                                {{ $t("Go to meal") }}
                            </b-btn>
                            <h3 class="d-inline align-middle">
                                {{ selectedCategory.name }}
                            </h3>
                        </b-col>

                        <b-col
                            md="3"
                            v-for="meal in getMealByCategory"
                            :key="meal.id"
                        >
                            <b-card
                                :title="meal.name"
                                :img-src="meal.imatge"
                                :img-alt="meal.name"
                                class="mb-4 menu-card shadow-sm"
                                overlay
                                text-variant="white"
                                img-top
                            >
                            </b-card>
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
import MealEndpoints from "../axios/api/meal";
import MealCategoryEndpoints from "../axios/api/mealCategory";
import { BIconChevronLeft } from "bootstrap-vue";

export default {
    components: {
        NavBar,
        FooterBar,
        BIconChevronLeft,
    },

    mounted() {
        this.loadMealCategory();
        this.loadMeal();
    },

    data() {
        return {
            meals: [],
            mealCategories: [],

            selectedCategory: null,
        };
    },

    computed: {
        getMealByCategory() {
            return this.meals.filter(
                ({ category }) => category === this.selectedCategory.id
            );
        },
    },

    methods: {
        loadMealCategory() {
            MealCategoryEndpoints.list({
                enabled: true,
            }).then(({ data }) => (this.mealCategories = data));
        },

        loadMeal() {
            MealEndpoints.list({
                enabled: true,
            }).then(({ data }) => (this.meals = data));
        },

        selectCategory(mealCategory) {
            this.selectedCategory = mealCategory;
        },

        unselectCategory() {
            this.selectedCategory = null;
        },
    },
};
</script>

