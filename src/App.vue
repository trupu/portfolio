<template lang='pug'>
    section.main
        <preloader />
        <NavBar v-if='showNavbar' />
        <backgroundMusic />
        <router-view></router-view>
        <Contact v-if='showContact' />
</template>
<script>
import NavBar from './js/template/components/NavBar.vue';
import Contact from './js/template/Contact.vue';
import backgroundMusic from './js/template/components/backgroundMusic.vue';
import particlesConfig from './js/particles/particlesConfig';
import preloader from './js/template/components/preload.vue';

export default {
    name: 'App',
    data() {
        return {
            showContact: false,
            showNavbar: true,
            particlesConfig,
            particlesTimeout: '',
            timer: Date.now()
        }
    },
    methods: {
        moveToLandingPage(x) {
            if (x.keyCode !== 27) return;
            this.$router.replace('/', () => {}, () => {});
        },
        hidePreloader() {
            const preload = document.querySelector('#preload');
            const preloadComponent = preload.querySelector('.preload-flex');

            preloadComponent.style.animation = 'hidePreload .5s ease-in-out both';
            preload.style.opacity = '0';

            setTimeout(() => {
                preload.style.display = 'none';
            }, 510);
        }
    },
    components: {
        NavBar,
        Contact,
        backgroundMusic,
        preloader
    },
    mounted() {
        this.showNavbar = true;
        this.particlesTimeout = setTimeout(() => {
            particlesJS("particles-js", this.particlesConfig);
        }, 0);

        window.addEventListener('load', () => {
            const timer = Math.abs(Date.now()-this.timer);
            
            if (timer < 1500) {
                setTimeout(() => {
                    this.hidePreloader();
                    console.log(`Time: ${Date.now()-this.timer}`);
                }, (1500-timer));
            } else {
                this.hidePreloader();
            }
        });
    }
}
</script>
<style lang="scss">

$gold: #D4AF37;


.main{
    color: $gold;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    min-height: 100vh;
    font-size: 16px;
}

</style>
