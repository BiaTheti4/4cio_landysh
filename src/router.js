import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./components/About.vue')
    },

    {
        path: '/candidate/:id',
        name: 'Candidate',
        component: () => import('./components/Candidate.vue')
    },
    {
        path: '/candidateForm',
        name: 'CandidateForm',
        component: () => import('./components/CandidateForm.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('./components/Contacts.vue')
    },
    {
        path: '/laureates',
        name: 'Laureates',
        component: () => import('./components/Laureates.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./components/Login.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('./components/News.vue')
    },
    {
        path: '/news/:id',
        name: 'NewsDetail',
        component: () => import('./components/NewsDetail.vue')
    },
    {
        path: '/Nominations',
        name: 'Nominations',
        component: () => import('./components/Nominations.vue')
    },
    {
        path: '/Candidate/:id',
        name: 'Candidate',
        component: () => import('./components/Candidate.vue')
    },
    {
        path: '/nominees',
        name: 'Nominees',
        component: () => import('./components/Nominees.vue')
    },
    //Несуществующие страницы
    {
        path: '*',
        name: 'Error',
        component: () => import('./components/Error.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;