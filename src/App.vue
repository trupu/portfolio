<template lang='pug'>
    section.main
        <NavBar />
        <router-view></router-view>
        <Contact v-if='showContact' />
</template>
<script>
import NavBar from './js/template/components/NavBar.vue';
import Contact from './js/template/Contact.vue';

export default {
    name: 'App',
    data() {
        return {
            showContact: false,
        }
    },
    components: {
        NavBar,
        Contact
    }
}
</script>
<style lang="scss">

$gold: #D4AF37;


.main{
    color: $gold;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 100vh;
    font-size: 16px;
}

</style>
