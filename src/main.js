import Vue from 'vue'
import App from './App.vue'
import VueRouter from "./router";
import VueI18n from "./translations";
import "./bootstrap";

Vue.config.productionTip = false

new Vue({
    VueRouter,
    VueI18n,
    render: h => h(App),
}).$mount('#app')
