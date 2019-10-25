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
                <router-link to="#">Contact</router-link>
            div.hamburger(@click='showMenu()')
                | MENU
                i(class="fas fa-bars")
            div.exit(@click='hideMenu()')
                i(class='fas fa-times')
</template>
<script>
export default {
    name: 'NavBar',
    methods: {
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

            links.forEach((el, index) => {
                let x = index*0.05;
                el.style.animation = `showMenu .5s ${x}s both ease-in-out`;
            });
            link.style.backgroundColor = 'rgba(0,0,0,.9)';
        },
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
        },
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
        }
    }
};
</script>
<style lang="scss">

    $gold: #D4AF37;

    @keyframes showMenu {
        0% {
            transform: translateY(-300px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes hideMenu {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-300px);
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
        z-index: 100;
        width: 100%;
        height: 50px;
        position: fixed;

        top: 50px;
        left: 0;

        .links-wrapper { 
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 90%;
            flex-flow: row;
            text-transform: uppercase;
            font-size: 1.2em;
            transition: all .3s ease-in-out;

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
            .links-wrapper {
                flex-flow: column;
                font-size: 1.5em;
                width: 100%;
                position: relative;

                .links-wrapper_link {
                    display: flex;
                    line-height: 1.8;
                    transform: translateY(-300px);
                    width: 100%;

                    a {
                        width: 100%;
                        text-align: center;

                        &:hover{
                            background-color: rgba(255,215,0,.5);
                        }
                    }
                }
                .hamburger, .exit {
                    display: flex;
                    position: absolute;
                    top: -30px;
                    right: 15px;

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
