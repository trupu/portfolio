import LandingPage from '../template/LandingPage.vue';
import NotFound from '../template/error/NotFound.vue';

export default [
    {
        path: '/', component: LandingPage
    },
    {
        path: '*', component: NotFound
    }
];
