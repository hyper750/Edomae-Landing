import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../translations";
import HomePage from "../views/HomePage";
import MenuPage from "../views/MenuPage";
import ContactPage from "../views/ContactPage";
import PageNotFound from "../views/PageNotFound";

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
        },
        {
            name: 'Page not found',
            path: '*',
            component: PageNotFound,
            meta: {
                title: i18n.t("Page not found - Edomae")
            }
        }
    ],

    scrollBehavior(to) {
        if(to.hash) {
            return {
                selector: to.hash
            };
        }

        return { x: 0, y: 0 };
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Edomae';
});

export default router;
