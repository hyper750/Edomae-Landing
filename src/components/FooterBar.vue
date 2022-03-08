<template>
    <div class="footer pt-3">
        <b-container fluid>
            <b-row>
                <b-col md="6">
                    <h5 class="text-muted text-center">{{ $t("Relevant links") }}</h5>
                </b-col>
                <b-col md="6">
                    <h5 class="text-muted text-center">{{ $t("Contact us") }}</h5>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" class="mx-auto">
                    <ul>
                        <li class="text-muted"><span class="fst-italic"><a href="https://glovoapp.com/es/es/mahon/edomae-mahon/" target="_blank">{{ $t("Order from glovo") }}</a></span></li>
                        <li class="text-muted"><span class="fst-italic"><a href="https://www.tripadvisor.es/Restaurant_Review-g642211-d23628124-Reviews-Edomae-Mahon_Menorca_Balearic_Islands.html?m=19905" target="_blank">{{ $t("Rate us at tripadvisor") }}</a></span></li>
                    </ul>
                </b-col>
                <b-col md="3" class="mx-auto">
                    <ul>
                        <li class="text-muted"><span class="fw-bold">{{ $t("Phone number") }}</span> <span class="fst-italic"><a href="tel:+34690706244">690 706 244</a></span></li>
                        <li class="text-muted"><span class="fw-bold">{{ $t("Location") }}</span> <span class="fst-italic"><a href="https://goo.gl/maps/gBGAaqBtD1HqDskh9" target="_blank">C/ Bon Aire, 26, 07701 Maó, Illes Balears</a></span></li>
                        <li class="text-muted"><span class="fw-bold">{{ $t("E-mail") }}</span> <span class="fst-italic"><a href="mailto:info@edomae.es">info@edomae.es</a></span></li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>