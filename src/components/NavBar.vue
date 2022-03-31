<template>
    <b-navbar
        toggleable="lg"
        type="dark"
        variant="primary"
        class="fixed-top ps-3 shadow"
    >
        <router-link to="/">
            <b-img
                :src="require('../assets/edomae.png')"
                class="brand-logo"
                alt="Edomae logo"
            />
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <ul class="navbar-nav mr-auto w-100">
                <li
                    v-for="(link, index) in navbarItems"
                    :key="index"
                    class="nav-item"
                >
                    <router-link
                        v-if="!link.external"
                        :to="link.link"
                        class="nav-link"
                        exact-active-class="active"
                    >
                        {{ $t(link.text) }}
                    </router-link>
                    <a
                        v-else
                        target="_blank"
                        :href="link.link"
                        class="nav-link"
                        >{{ $t(link.text) }}</a
                    >
                </li>
            </ul>

            <b-dropdown id="languageChooser" variant="default">
                <template #button-content>
                    <b-img
                        :src="getActiveLanguage.flag"
                        class="flag"
                        alt="Current language flag"
                    />
                    {{ getActiveLanguage.text }}
                </template>
                <b-dropdown-item-button
                    v-for="languageAvailable in getLanguages"
                    :key="languageAvailable.code"
                    :active="isActiveLanguage(languageAvailable)"
                    @click="() => setLanguage(languageAvailable)"
                >
                    <b-img
                        :src="languageAvailable.flag"
                        alt="Language flag"
                        class="flag"
                    />
                    {{ $t(languageAvailable.text) }}
                </b-dropdown-item-button>
            </b-dropdown>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { languageAvailable } from "../translations";

export default {
    data() {
        return {
            navbarItems: [
                {
                    text: "Home",
                    link: "/",
                },
                {
                    text: "Menu",
                    link: "/menu",
                },
                {
                    text: "Contact",
                    link: "/contact",
                },
                {
                    text: "Order from Glovo",
                    link: "https://glovoapp.com/es/es/mahon/edomae-mahon/",
                    external: true,
                },
                {
                    text: "Order from A Taula",
                    link: "https://a-taula.com/restaurant/352/edomae",
                    external: true,
                },
            ],
        };
    },

    computed: {
        getLanguages() {
            return languageAvailable;
        },

        getActiveLanguage() {
            return languageAvailable.find(
                ({ code }) => code === this.$i18n.locale
            );
        },
    },

    methods: {
        setLanguage({ code }) {
            this.$i18n.locale = code;
            localStorage.setItem("language", code);
        },

        isActiveLanguage({ code }) {
            return this.$i18n.locale === code;
        },
    },
};
</script>

