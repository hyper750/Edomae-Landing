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
                            <h2 class="text-center text-muted mb-4">
                                {{ $t("Menu") }}
                            </h2>
                        </b-col>
                    </b-row>

                    <transition name="fade" mode="out-in">
                        <!-- Show categories if no category is selected -->
                        <b-row v-if="!selectedCategory">
                            <b-col
                                md="3"
                                class="mb-4"
                                v-for="mealCategory in mealCategories"
                                :key="mealCategory.id"
                            >
                                <b-card
                                    :title="mealCategory.name"
                                    :img-src="mealCategory.imatge"
                                    :img-alt="mealCategory.name"
                                    class="menu-card shadow-sm h-100"
                                    @click="() => selectCategory(mealCategory)"
                                >
                                </b-card>
                            </b-col>
                        </b-row>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <!-- Show meals of the category selected -->
                        <b-row v-if="selectedCategory">
                            <b-col md="12" class="mb-3">
                                <b-btn
                                    variant="outline-primary"
                                    class="me-4"
                                    @click="() => unselectCategory()"
                                >
                                    <BIconChevronLeft />
                                    {{ $t("Back to categories") }}
                                </b-btn>
                                <h3 class="d-inline align-middle">
                                    {{ selectedCategory.name }}
                                </h3>
                            </b-col>

                            <b-col
                                md="3"
                                class="mb-4"
                                v-for="meal in getMealByCategory"
                                :key="meal.id"
                            >
                                <b-card
                                    :title="`${meal.name} - ${meal.price}€`"
                                    :sub-title="meal.description"
                                    :img-src="meal.imatge"
                                    :img-alt="meal.name"
                                    class="menu-card shadow-sm h-100"
                                >
                                </b-card>
                            </b-col>
                        </b-row>
                    </transition>
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
    metaInfo: {
        meta: [
            {
                name: 'Description',
                content: 'Menú del restaurante Edomae Mahón'
            }
        ]
    },

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
            }).then(({ data }) => {
                const excludeCategories = [
                    // Don't show "bebidas"
                    3,
                ];
                this.mealCategories = data.filter(
                    ({ id }) => !excludeCategories.includes(id)
                );
            });
        },

        loadMeal() {
            MealEndpoints.list({
                enabled: true,
            }).then(({ data }) => (this.meals = data));
        },

        selectCategory(mealCategory) {
            this.selectedCategory = mealCategory;
            window.scrollTo(0, 0);
        },

        unselectCategory() {
            this.selectedCategory = null;
            window.scrollTo(0, 0);
        },
    },
};
</script>

