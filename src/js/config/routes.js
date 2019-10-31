import LandingPage from '../template/LandingPage.vue';
import NotFound from '../template/error/NotFound.vue';
import Portfolio from '../template/Portfolio.vue';

export default [
    {
        path: '/', component: LandingPage
    },
    {
        path: '/portfolio', component: Portfolio
    },
    {
        path: '*', component: NotFound
    }
];
