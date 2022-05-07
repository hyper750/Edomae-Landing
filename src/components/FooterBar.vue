<template>
    <div class="footer pt-3">
        <b-container fluid>
            <b-row>
                <b-col md="4">
                    <h5 class="text-muted text-center">{{ $t("Relevant links") }}</h5>
                </b-col>
                <b-col md="4">
                    <h5 class="text-muted text-center">{{ $t("Hours") }}</h5>
                </b-col>
                <b-col md="4">
                    <h5 class="text-muted text-center">{{ $t("Contact us") }}</h5>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" class="mx-auto">
                    <ul>
                        <li class="text-muted"><span class="fst-italic"><a :href="getMenuLink" target="_blank">{{ $t("Menu PDF") }}</a></span></li>
                        <li class="text-muted"><span class="fst-italic"><a href="https://glovoapp.com/es/es/mahon/edomae-mahon/" target="_blank">{{ $t("Order from Glovo") }}</a></span></li>
                        <li class="text-muted"><span class="fst-italic"><a href="https://a-taula.com/restaurant/352/edomae" target="_blank">{{ $t("Order from A Taula") }}</a></span></li>
                        <li class="text-muted"><span class="fst-italic"><a href="https://www.tripadvisor.es/Restaurant_Review-g642211-d23628124-Reviews-Edomae-Mahon_Menorca_Balearic_Islands.html?m=19905" target="_blank">{{ $t("Rate us at tripadvisor") }}</a></span></li>
                    </ul>
                </b-col>
                <b-col md="3" class="mx-auto">
                    <ul>
                        <li v-for="weekDay in getWeekDays" :key="weekDay.getTime()" class="text-muted fst-italic" :class="{'fw-bold': isCurrentWeekDay(weekDay)}">
                            {{ formatWeekDayName(weekDay) }}: 
                                <span v-if="!isClosedDay(weekDay)">
                                    <span>
                                        {{ formatHour(hours) }}
                                    </span>
                                </span>
                                <span v-else>
                                    {{ $t("Closed") }}
                                </span>
                        </li>
                    </ul>
                </b-col>
                <b-col md="3" class="mx-auto">
                    <ul>
                        <li class="text-muted"><span class="fw-bold"><b-icon icon="telephone-outbound-fill"></b-icon></span> <span class="fst-italic"><a href="tel:+34690706244">690 706 244</a></span></li>
                        <li class="text-muted"><span class="fw-bold"><b-icon icon="geo-alt-fill"></b-icon></span> <span class="fst-italic"><a href="https://goo.gl/maps/gBGAaqBtD1HqDskh9" target="_blank">C/ Bon Aire, 26, 07701 Maó, Illes Balears</a></span></li>
                        <li class="text-muted"><span class="fw-bold"><b-icon icon="envelope-fill"></b-icon></span> <span class="fst-italic"><a href="mailto:info@edomae.es">info@edomae.es</a></span></li>
                        <li class="text-muted"><span class="fw-bold"><b-icon icon="instagram"></b-icon></span> <span class="fst-italic"><a href="https://www.instagram.com/edomaemao/" target="_blank">@edomaemao</a></span></li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hours: [
                {
                    open: '13:30',
                    close: '16:00'
                },
                {
                    open: '13:30',
                    close: '16:00'
                }
            ],
            closedDays: [
                // Sunday
                0,
                // Monday
                1,
            ]
        };
    },

    methods: {
        formatWeekDayName(date) {
            return date.toLocaleDateString(
                this.$i18n.locale,
                { weekday: 'long' }
            );
        },

        isClosedDay(date) {
            return date.getDay() in this.closedDays;
        },

        formatHour(hour) {
            return hour.map((h) => `${h.open} - ${h.close}`).join(', ');
        },

        isCurrentWeekDay(date) {
            return date.getDay() === new Date().getDay();
        },
    },

    computed: {
        getMenuLink() {
            let lang = this.$i18n.locale;
            // The PDF is not available in catalan...
            const excludeLang = [
                'ca',
            ];

            if(lang in excludeLang) {
                lang = 'en';
            }

            return `/carta_${lang}.pdf`;
        },

        getWeekDays() {
            const days = [];

            const initialDate = new Date(Date.UTC(2022, 4, 2));

            for(let i = 1; i <= 7; i++) {
                // Add weekday
                days.push(new Date(initialDate))
                // Add 1 day
                initialDate.setTime(initialDate.getTime() + (24 * 60 * 60 * 1000))
            }

            return days;
        },
    }
};
</script>
