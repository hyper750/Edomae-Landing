<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
            <b-img
                :src="require('../assets/edomae.png')"
                class="brand-logo"
                alt="Edomae logo"
            />
        </router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto w-100">
                <li
                    v-for="link in navbarItems"
                    :key="link.text"
                    class="nav-item"
                >
                    <router-link
                        :to="link.link"
                        class="nav-link"
                        active-class="active"
                    >
                        {{ link.text }}
                    </router-link>
                </li>
            </ul>
            <b-dropdown id="languageChooser" variant="default" right>
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
        </div>
    </nav>
</template>

<script>
import { languageAvailable } from "../translations";

export default {
    data() {
        return {
            navbarItems: [
                {
                    text: this.$i18n.t("Home"),
                    link: "/",
                },
                {
                    text: this.$i18n.t("Menu"),
                    link: "/menu",
                },
                {
                    text: this.$i18n.t("Contact"),
                    link: "/contact",
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

