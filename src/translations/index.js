import Vue from "vue";
import VueI18n from "vue-i18n";
import spanishTranslations from "./es.json";
import englishTranslations from "./en.json";

Vue.use(VueI18n);

export const languageAvailable = [
    {
        code: 'es',
        text: 'Spanish',
        file: spanishTranslations
    },
    {
        code: 'es',
        text: 'Spanish',
        file: englishTranslations
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
