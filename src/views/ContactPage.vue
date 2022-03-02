<template>
    <b-container fluid class="vh-100 bg-light">
        <b-row>
            <b-col md="12">
                <NavBar />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
    components: {
        NavBar,
    },
};
</script>

