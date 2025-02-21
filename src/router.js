import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/Home.vue') // Ленивая загрузка компонента
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./components/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;