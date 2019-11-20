<<template lang='pug'>
    nav#navbar
        div.links-wrapper
            div.links-wrapper_link
                <router-link to="/">Logo</router-link>
            div.links-wrapper_link
                <router-link to="/portfolio">Portfolio</router-link>
            div.links-wrapper_link
                <router-link to="/about">About</router-link>
            div.links-wrapper_link(@click='showContact()')
                <router-link to="/">Contact</router-link>
        div.links-nav
            div.hamburger(@click='showMenu()')
                | MENU
                i(class="fas fa-bars")
            div.exit(@click='hideMenu()')
                i(class='fas fa-times')
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isScrolling: '',
        }
    },
    methods: {
        // Showing nav-bar menu
        showMenu() {
            const links = document.querySelectorAll('.links-wrapper_link');
            const link = document.querySelector('.links-wrapper');
            const buttonH = document.querySelector('.hamburger');
            const buttonE = document.querySelector('.exit');
            
            if (buttonH) {
                buttonH.style.animation = 'hideButton .5s both ease-in-out';
                buttonH.style.zIndex = '-1';
            }

            if (buttonE) {
                buttonE.style.animation = 'showButton .5s both ease-in-out';
                buttonE.style.zIndex = '100';
            }
            link.style.display = 'flex';
            links.forEach((el, index) => {
                let x = index*0.05;
                el.style.animation = `showMenu .5s ${x}s both ease-in-out`;
            });
            link.style.backgroundColor = 'rgba(0,0,0,.9)';
        },
        // hiding nav-bar menu
        hideMenu() {
            const links = document.querySelectorAll('.links-wrapper_link');
            const link = document.querySelector('.links-wrapper');
            const buttonH = document.querySelector('.hamburger');
            const buttonE = document.querySelector('.exit');
            
            if (buttonH) {
                buttonH.style.animation = 'showButton .5s both ease-in-out';
                buttonH.style.zIndex = '100';
            }

            if (buttonE) {
                buttonE.style.animation = 'hideButton .5s both ease-in-out';
                buttonE.style.zIndex = '-1';
            }
            links.forEach((el, index) => {
                let x = index*0.05;
                el.style.animation = `hideMenu .5s ${x}s both ease-in-out`;
            });
            link.style.backgroundColor = 'rgba(0,0,0,0)';
            const ev = setTimeout(() => {
                link.style.display = 'none';
            }, 500);
        },
        // showing contact menu
        showContact() {
            if (this.$parent.showContact) {
                const list = document.querySelectorAll('.contact-box_wrapper');
                if (list) {
                    list.forEach((el) => el.style.animation = 'slideOut .5s both ease-in-out');
                    list[0].addEventListener('animationend', () => this.$parent.showContact = false);
                }
                return;
            }
            this.$parent.showContact = true;
        },
        // changing nav`s background onscroll
        watchForScroll() {
            const nav = document.querySelector('#navbar');
            (window.scrollY > 0) ? nav.style.backgroundColor = 'rgba(0,0,0,.8)' : nav.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            clearInterval(this.isScrolling);
            this.isScrolling = setTimeout(() => {
                this.watchForScroll();
            }, 100);
        });

        if (window.innerWidth < 768) {
            const links = document.querySelectorAll('.links-wrapper_link');
            links.forEach(el => {
                el.addEventListener('click', this.hideMenu);
            });
        }
    }
};
</script>
<style lang="scss">

    $gold: #D4AF37;

    @keyframes showMenu {
        0% {
            z-index: -1;
            opacity: 0;
            transform: translateY(-100px);
        }
        50%{
            
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            z-index: 150;
            opacity: 1;
        }
    }

    @keyframes hideMenu {
        0% {
            z-index: 150;
            opacity: 1;
            transform: translateY(0);
        }
        50%{
            opacity: 0;
            
        }
        100% {
            transform: translateY(-100px);
            z-index: -1;
            opacity: 0;
            
        }
    }

    @keyframes showButton {
        0% {
            opacity: 0;
            transform: translateX(10px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes hideButton {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(10px);
        }
    }

    #navbar {
        z-index: 150;
        width: 100%;
        height: 50px;
        position: fixed;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;

        top: 40px;
        left: 0;
        transition: background .5s ease-in-out;

        .links-wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 90%;
            flex-flow: row;
            text-transform: uppercase;
            font-size: 1.2em;
            transition: all .3s ease-in-out;
            z-index: -1;

            .links-wrapper_link {
                margin: 0 15px;

                transform: translateY(0);
                transition: all .5s ease-in-out;

                a {
                    text-decoration: none;
                    color: $gold;
                    transition: all .3s ease-in-out;

                    &:hover{
                        color: lighten($gold, 20);
                        cursor: pointer;
                    }
                }
            }
        }

        .hamburger, .exit {
            display: none;
            flex-flow: row;
            align-items: center;
            justify-content: center;

            i { 
                margin: 0 8px;
            }
        }
    }

    @media (max-width: 768px) {
        #navbar {
            top: 0;
            z-index: 100;
            height: 60px;
            .links-wrapper {
                flex-flow: column;
                font-size: 1.5em;
                width: 100%;
                height: 100vh;
                position: relative;
                justify-content: center;
                display: none;
                position: absolute;
                top: 0;
                left: 0;

                .links-wrapper_link {
                    display: flex;
                    font-size: 1.2em;
                    line-height: 2;
                    width: 100%;



                    z-index: -1;

                    a {
                        width: 100%;
                        text-align: center;

                        &:hover{
                            background-color: rgba(255,215,0,.5);
                        }
                    }
                }
            }
            .links-nav {
                font-size: 1.5em;
                .hamburger, .exit {
                    display: flex;
                    position: absolute;
                    top: 20px;
                    right: 15px;
                    z-index: 100;

                    transition: all .3s ease-in-out;

                    &:hover {
                        color: lighten($gold, 20);
                        cursor: pointer;
                    }
                }
                .exit {
                    z-index: -1;
                    opacity: 0;
                    font-size: 1.3em;
                }
            }
        }
    }
</style>
