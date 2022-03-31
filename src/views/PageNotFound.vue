<template>
    <b-container fluid class="vh-100 bg-light">
        <b-row class="navbar-margin">
            <b-col md="12">
                <NavBar />
            </b-col>
        </b-row>

        <b-row class="px-3">
            <b-col md="12" class="bg-white p-4 text-center">
                <h2 class="text-danger">
                    {{ $t("404 Page not found") }}
                </h2>
                <h3 class="text-secondary">
                    {{
                        $t(
                            "The page you are looking for doesn't exist or an error occured."
                        )
                    }}
                </h3>
                <b-img
                    :src="require('@/assets/sad-sushi.jpg')"
                    alt="Error page"
                    class="mx-auto mt-4"
                    max-width="80%"
                />
            </b-col>
        </b-row>

        <b-row class="mt-4 pb-4">
            <b-col md="12">
                <Footer />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/FooterBar";

export default {
    components: {
        NavBar,
        Footer,
    },
};
</script>
