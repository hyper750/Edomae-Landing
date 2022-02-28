import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import i18n from "../translations";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomePage,
            meta: {
                title: i18n.t('Home - Edomae')
            }
        }
    ]
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Edomae';
});

export default router;
