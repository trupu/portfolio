<template lang='pug'>
    section.main
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

export default {
    name: 'App',
    data() {
        return {
            showContact: false,
            showNavbar: true,
            particlesConfig,
            particlesTimeout: ''
        }
    },
    methods: {
        moveToLandingPage(x) {
            if (x.keyCode !== 27) return;
            this.$router.replace('/', () => {}, () => {});
        }
    },
    components: {
        NavBar,
        Contact,
        backgroundMusic
    },
    mounted() {
        this.showNavbar = true;
        this.particlesTimeout = setTimeout(() => {
            particlesJS("particles-js", this.particlesConfig);
        }, 0);
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
