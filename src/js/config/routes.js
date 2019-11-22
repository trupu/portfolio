import LandingPage from '../template/LandingPage.vue';
import NotFound from '../template/error/NotFound.vue';
import Portfolio from '../template/Portfolio.vue';
import About from '../template/About.vue';
import Email from '../template/Email.vue';

export default [
    {
        path: '/', component: LandingPage
    },
    {
        path: '/portfolio', component: Portfolio
    },
    {
        path: '/about', component: About
    },
    {
        path: '/email', component: Email
    },
    {
        path: '*', component: NotFound
    }
];
