<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
            <img
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
            <ul class="navbar-nav mr-auto">
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
        </div>
    </nav>
</template>

<script>
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
};
</script>

