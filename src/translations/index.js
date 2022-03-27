import Vue from "vue";
import VueI18n from "vue-i18n";
import spanishTranslations from "./translations/es.json";
import englishTranslations from "./translations/en.json";
import catalanTranslations from "./translations/ca.json";
import GBFlag from "../assets/languageFlags/GB.png";
import ESFlag from "../assets/languageFlags/ES.png";
import CAFlag from "../assets/languageFlags/CA.png";

Vue.use(VueI18n);

export const languageAvailable = [
    {
        code: 'es',
        text: 'Spanish',
        file: spanishTranslations,
        flag: ESFlag
    },
    {
        code: 'ca',
        text: 'Catalan',
        file: catalanTranslations,
        flag: CAFlag
    },
    {
        code: 'en',
        text: 'English',
        file: englishTranslations,
        flag: GBFlag
    },
];

const i18n = new VueI18n({
    locale: localStorage.getItem('language') || 'es',
    availableLocales: languageAvailable.map(({ code }) => code),
    messages: languageAvailable.reduce((translations, translationAvailable) => {
        return {
            ...translations,
            [translationAvailable.code]: translationAvailable.file
        };
    }, {})
});

export default i18n;
