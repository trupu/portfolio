<template lang="pug">
    section#about
        div.about-container
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Personal Information
                    p.content
                        | My name is Sławek Trubiłowicz, I`m 20years old, living in Kożuchów, Poland. I`ve been dreaming about being computer programmer since I graduated from secondary school. Thats probably why I`ve chosen the IT Specialist specialisation in highschool. School gave me some IT background knowledge, which I`m continuously developing. I`m rather an introvert and strict mind, what appears in my hobby - about later :)
                div.img-holder
                    img(src='../../img/me.png')    
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Skills
                    p.content
                        | Although I`m a junior developer, without the industry experience, I`ve developed some skills needed as a Web Developer. <br /> Technologies I`ve been working with: 
                        ul.skills-list
                            li
                                | Standard:
                            ol
                                li
                                    | HTML5,
                                li
                                    | CSS3(RWD - Flexbox, CSS Grid, Bootstrap),
                                li
                                    | JS (jQuery, ES6, ES8 Promises, ESNext fe. Optional Chaining),
                            li
                                | Frameworks:
                            ol
                                li
                                    | Vue.js (Templates, SFC, Clientside Routing, Data manipulation),
                                li
                                    | Express.js (REST Api, http/https Web Server),
                                li
                                    | Nest.js (Basic knowledge)
                            li
                                | Tools:
                            ol
                                li
                                    | Webpack (loaders, plugins, devServer),
                                li
                                    | Gulp (tasks),
                            li
                                | OS:
                            ol
                                li
                                    | Linux (Ubuntu, Debian),
                                li
                                    | Windows (10, Server),
                            li
                                | Others:
                            ol
                                li
                                    | Node.js (Backend API),
                                li
                                    | MongoDB (Document Oriented Database),
                                li
                                    | MySQL (Relational Database),
                                li
                                    | npm, yarn,
                                li
                                    | Git,
                                li
                                    | Eslint
                div.img-holder
                    img(src='../../img/tesseract.png')
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Education & Achievments
                    div.content-grid
                        p.content
                            | 2015-2019
                        p.content
                            | IT Specialist in local school (Piątka Kożuchów).
                        p.content
                            | 23.05.2018r.
                        p.content
                            | I was a competitor in finals of national IT competitions 'IT and cyber security' in Warsaw
                        p.content
                            | Currently:
                        p.content
                            | First year student of computer science on University of Zielona Góra
                div.img-holder
                    img(src='../../img/five.png')
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Hobby
                    p.content
                        | Mainly I`m a powerlifter, however I also love to play logical games (like chess). Furthermore Math and Physics (I`m into astrophysics) aren`t scary to me :)
                div.img-holder
                    img(src='../../img/atom.png')
            <back />
            <scroll />
</template>
<script>
import back from './components/back.vue';
import scroll from './components/scroll.vue';
import particlesConfig from '../particles/particlesConfig';

export default {
    name: 'About',
    data() {
        return {
            particlesConfig,
            wheelTimeout: '',
            resizeTimeout: ''
        }
    },
    components: {
        back,
        scroll
    },
    methods: {
        // handling user`s key interraction
        checkForPushedKey(x) {
            if (x.keyCode == 37) {
                this.prevElement();
            } else if (x.keyCode == 39) {
                this.nextElement();
            }
        },
        // checking if user scrolled
        checkForScroll(x) {
            x.deltaY > 0 ? this.nextElement() : this.prevElement();
        },
        // handling events for different resolutions
        scrollHandler(event) {
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(() => {
                this.checkForScroll(event);
            }, 300);
        },
        // showing element
        showElement(el) {
            el.style.opacity = 1;
            el.classList.toggle('about-active');
            const img = el.querySelector('.img-holder');
            const content = el.querySelector('.content-wrapper');

            img.style.display = 'flex';
            content.style.display = 'flex';

            setTimeout(() => {
                img.style.animation = 'showAbout .4s ease-in-out both';
                content.style.animation = 'showAboutReverse .4s ease-in-out both';
            }, 10);
        },
        // hiding element
        hideElement(el) {
            el.classList.toggle('about-active');
            const img = el.querySelector('.img-holder');
            const content = el.querySelector('.content-wrapper');

            img.style.animation = 'hideAbout .4s ease-in-out both';
            content.style.animation = 'hideAboutReverse .4s ease-in-out both';

            setTimeout(() => {
                img.style.display = 'none';
                content.style.display = 'none';
            }, 510);
            el.style.opacity = 0;
        },
        // showing hidden elements while changing window width 
        showHiddenElements() {
            const info = document.querySelectorAll('.info-wrapper');
            const hidden = Array.from(info).map(el => {
                if (!el.classList.contains('about-active')) {
                    this.showElement(el);
                }
            });
        },
        // hiding every element & showing just the first one
        hideShowedElements() {
            const info = document.querySelectorAll('.info-wrapper');
            const showed = Array.from(info).map(el => {
                this.hideElement(el);
                if (el.classList.contains('about-active')) el.classList.remove('about-active');
            });
        },
        // previous element
        prevElement() {
            const elements = document.querySelectorAll('.info-wrapper');
            const eArray = Array.from(elements);

            const current = document.querySelector('.about-active');
            const index = eArray.indexOf(current);
            
            this.hideElement(current);
            (!elements[index-1]) ? this.showElement(elements[(elements.length-1)]) : this.showElement(elements[index-1]);
        },
        // next element
        nextElement() {
            const elements = document.querySelectorAll('.info-wrapper');
            const eArray = Array.from(elements);

            const current = document.querySelector('.about-active');
            const index = eArray.indexOf(current);
            
            this.hideElement(current);
            (!elements[index+1]) ? this.showElement(elements[0]) : this.showElement(elements[index+1]);
        },
        // handling functionalities for different resolutions
        functionalityHandler() {
            if (window.innerWidth > 768) {
                this.$parent.showNavbar = false;
                this.hideShowedElements();
                setTimeout(() => {
                    const first = document.querySelector('.info-wrapper');
                    this.showElement(first);
                }, 550);
                window.addEventListener('wheel', this.scrollHandler);
            } else {
                this.$parent.showNavbar = true;
                window.removeEventListener('wheel', this.scrollHandler);
                this.showHiddenElements();
            }
        },
        resizeHandler() {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.functionalityHandler();
            }, 100);
        }
    },
    mounted() {

        window.addEventListener('keydown', event => {
            this.$parent.moveToLandingPage(event);
        });

        window.addEventListener('keydown', event => {
            this.checkForPushedKey(event);
        });
        // switching between functions depending on the window size
        this.functionalityHandler();

        window.addEventListener('resize', this.resizeHandler);
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeHandler);
    }
};
</script>
<style lang="scss">

@keyframes showAbout {
    0% {
        opacity: 0;
        transform: translateY(200px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes showAboutReverse {
    0% {
        opacity: 0;
        transform: translateY(-200px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes hideAbout {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(200px);
    }
}

@keyframes hideAboutReverse {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-200px);
    }
}

.main {
    z-index: 30;
}

#about {
    height: auto;
    z-index: 30;
    width: 100%;
    .about-container {
        width: 100%;
        z-index: 30;
        padding: 60px 0;

        .info-wrapper {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 30;
            width: 100%;
            transition: opacity .3s ease-in-out;
            text-shadow: 0 0 2px #000;

            .img-holder {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: auto;
                object-fit: cover;
                z-index: 30;
                margin: 20px 0;

                img {
                    width: 90%;
                    z-index: 30;
                }
            }

            .content-wrapper {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                font-size: 16px;
                z-index: 30;

                h3 {
                    line-height: 1.2;
                    font-size: 1.2em;
                    padding: 5px 10px;
                    margin: 0;
                    z-index: 30;
                }

                p {
                    font-size: 1em;
                    padding: 5px 10px;
                    z-index: 30;
                    line-height: 2;

                    .skills-list{
                        list-style-type: none;
                        line-height: 1.2;
                        display: flex;
                        flex-flow: column;
                        margin: 10px 0;
                        padding: 0;
                        text-align: left;
                        ol {
                            font-size: .8em;
                            margin: 10px 0;
                            padding: 0;
                            padding-left: 25px;
                            list-style-type: disc;
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 480px) {
    #about {
        .about-container {
            padding: 100px 0;
            .info-wrapper {
                padding: 30px 0;
                .img-holder {
                    img {
                        width: 80%;
                        border-radius: 5px;
                    }
                }
                .content-wrapper {
                    font-size: 1.2em;
                    
                    p {
                        .skills-list {
                            padding: 0 20px;

                            ol {
                                padding-left: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    #about {
        width: 100%;
        overflow: hidden;
        .about-container {
            padding: 0;
            .info-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;

                padding: 50px 20px;

                flex-flow: row;
                font-size: .8em;
                opacity: 0;
                .img-holder {
                    animation: hideAboutReverse 0s ease-in-out both;
                    display: none;
                    img {
                        width: 70%;
                    }
                }
                .content-wrapper {
                    animation: hideAbout 0s ease-in-out both;
                    display: none;
                }
            }

            .info-wrapper:nth-child(2), .info-wrapper:nth-child(4), .info-wrapper:nth-child(6) {
                flex-flow: row-reverse;
            }
        }
    }
}

</style>