import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "../settings";

Vue.use(VueReCaptcha, { siteKey: RECAPTCHA_SITE_KEY });
