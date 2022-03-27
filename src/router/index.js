import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../translations";
import HomePage from "../views/HomePage";
import MenuPage from "../views/MenuPage";
import ContactPage from "../views/ContactPage";

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
        },
        {
            name: 'Menu',
            path: '/menu',
            component: MenuPage,
            meta: {
                title: i18n.t('Menu - Edomae')
            }
        },
        {
            name: 'Contact',
            path: '/contact',
            component: ContactPage,
            meta: {
                title: i18n.t('Contact - Edomae')
            }
        }
    ],

    scrollBehavior(to) {
        if(to.hash) {
            return {
                selector: to.hash
            };
        }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Edomae';
});

export default router;
