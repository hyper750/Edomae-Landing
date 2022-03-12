<template>
    <b-container fluid class="vh-100 bg-light">
        <b-row class="navbar-margin">
            <b-col md="12">
                <NavBar />
            </b-col>
        </b-row>

        <v-row>
            <b-col md="12" class="bg-white p-4">
                <b-container fluid>
                    <b-row>
                        <b-col md="6" class="mb-4">
                            <h2 class="text-center text-muted mb-4">
                                {{ $t("Contact us") }}
                            </h2>
                            <b-form @submit="sendMessage" ref="contactForm">
                                <b-container fluid>
                                    <b-row>
                                        <b-col md="4">
                                            <b-form-group
                                                id="name-fieldset"
                                                :label="$t('Name')"
                                                label-for="name"
                                            >
                                                <b-form-input
                                                    id="name"
                                                    v-model="name"
                                                    type="text"
                                                    trim
                                                    :placeholder="$t('Name...')"
                                                    required
                                                    :disabled="isSending"
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="8">
                                            <b-form-group
                                                id="email-fieldset"
                                                :label="$t('E-mail')"
                                                label-for="email"
                                            >
                                                <b-form-input
                                                    id="email"
                                                    v-model="email"
                                                    type="email"
                                                    trim
                                                    :placeholder="
                                                        $t('Email address...')
                                                    "
                                                    required
                                                    :disabled="isSending"
                                                />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col md="12">
                                            <b-form-group
                                                id="message-fieldset"
                                                :label="$t('Message')"
                                                label-for="message"
                                            >
                                                <b-form-textarea
                                                    id="message"
                                                    trim
                                                    v-model="message"
                                                    :placeholder="
                                                        $t('Message...')
                                                    "
                                                    required
                                                    :disabled="isSending"
                                                    rows="8"
                                                />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="12" class="mt-4 text-end">
                                            <b-spinner
                                                v-show="isSending"
                                                variant="primary"
                                                class="me-4"
                                            />
                                            <p
                                                v-if="
                                                    isSending !== null &&
                                                    !isSending &&
                                                    errors
                                                "
                                                class="
                                                    d-inline
                                                    me-4
                                                    text-danger
                                                "
                                            >
                                                {{
                                                    $t(
                                                        "Error sending the message"
                                                    )
                                                }}
                                            </p>
                                            <p
                                                v-if="
                                                    isSending !== null &&
                                                    !isSending &&
                                                    !errors
                                                "
                                                class="
                                                    d-inline
                                                    me-4
                                                    text-success
                                                "
                                            >
                                                {{ $t("Message sent") }}
                                            </p>
                                            <b-button
                                                type="submit"
                                                variant="primary"
                                                :disabled="isSending"
                                            >
                                                {{ $t("Send message") }}
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-form>
                        </b-col>
                        <b-col md="6">
                            <h2 class="text-center mb-4 text-muted">
                                {{ $t("Where can you find us") }}
                            </h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3061.321640023314!2d4.2624732!3d39.8894305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ba8b7087120ed14!2sEdomae!5e0!3m2!1ses!2ses!4v1647099895608!5m2!1ses!2ses"
                                width="100%"
                                height="450"
                                style="border: 0"
                                allowfullscreen="true"
                                loading="lazy"
                            ></iframe>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </v-row>

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
import ContactMessageEndpoints from "../axios/api/contactMessage";

export default {
    components: {
        NavBar,
        FooterBar,
    },

    data() {
        return {
            name: null,
            email: null,
            message: null,
            isSending: null,
            errors: false,
        };
    },

    methods: {
        sendMessage(event) {
            event.preventDefault();
            this.isSending = true;
            ContactMessageEndpoints.post({
                name: this.name,
                email: this.email,
                message: this.message,
            })
                .then(() => {
                    this.errors = false;
                })
                .catch(() => {
                    this.errors = true;
                })
                .finally(() => {
                    this.isSending = false;
                    setTimeout(() => {
                        this.$refs.contactForm.reset();
                    }, 10);
                });
        },
    },
};
</script>

