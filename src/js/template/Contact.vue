<template lang="pug">
    section#contact
        div.contact-box
            div.contact-box_wrapper(v-for='keys in informations')
                a.contact-box_wrapper__content(v-if='keys.link' :href='keys.link' target='blank')
                    i(:class='keys.icon')
                    | {{ keys.value }}
                span.contact-box_wrapper__content(v-if='!keys.link && !keys.pushLink')
                    i(:class='keys.icon')
                    | {{ keys.value }}
                router-link.contact-box_wrapper__content(to='/email' v-if='keys.pushLink')
                    i(:class='keys.icon')
                    | {{ keys.value }} 
</template>
<script>
export default {
    name: 'Contact',
    data() {
        return {
            informations: {
                facebook: {
                    value: 'Facebook',
                    link: 'https://www.facebook.com/people/Sławek-Trubiłowicz/100007242794470',
                    icon: 'fab fa-facebook'
                },
                github: {
                    value: 'Github',
                    link: 'https://github.com/trupu',
                    icon: 'fab fa-github',
                },
                mail: {
                    value: 'strubilowicz@zsp5kozuchow.pl',
                    pushLink: '/email',
                    icon: 'far fa-envelope',
                },
                telephone: {
                    value: '693 012 101',
                    icon: 'fas fa-phone',
                }
            }
        }
    }
}
</script>
<style lang="scss">

    $gold: #D4AF37;

    @keyframes slideIn {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

     @keyframes slideOut {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(-100px);
            opacity: 0;
        }
    }

    #contact {
        max-width: 100vw;
        width: 100%;
        height: auto;

        position: absolute;
        bottom: 50px;
        left: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;

        .contact-box {
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-around;
            font-size: 1.2em;
            width: 90%;

            .contact-box_wrapper {
                display: flex;
                flex-flow: row;
                overflow: hidden;
                animation: slideIn .5s both ease-in-out;

                .contact-box_wrapper__content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-flow: row;
                    text-decoration: none;
                    color: $gold;
                    width: 100%;
                }

                a {
                    &:hover {
                        color: lighten($gold, 20);
                        cursor: pointer;
                    }
                }

                i {
                    margin: 0 10px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        #contact {

            bottom: 5px;
            .contact-box {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px 20px;

                .contact-box_wrapper {

                    .contact-box_wrapper__content {
                        flex-flow: column;
                        font-size: .8em;
                    }

                    i {
                        margin: 10px 0;
                        font-size: 2em;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        #contact {
            .contact-box {
                background-color: rgba(0,0,0,.5);
                .contact-box_wrapper {
                    .contact-box_wrapper__content {
                        font-size: .6em;
                    }
                }
            }
        }
    }
</style>