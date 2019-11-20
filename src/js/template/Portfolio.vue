<template lang="pug">
    section#portfolio
        div.portfolio-wrapper
            div.slider-content
                div.title-wrapper
                    p.title-wrapper_name
                        | {{ projects[index].name }}
                    p.title-wrapper_stack
                        | {{ projects[index].stack }}
                div.description-wrapper
                    p.description-wrapper_content
                        | {{ projects[index].description }}
                div.icons-wrapper
                    a.git(:href='projects[index].gitlink' target='blank')
                        i(class='fab fa-github')
                        span.content
                            | Github
                    a.preview(:href='projects[index].preview' target='blank')
                        i(class='far fa-file-code')
                        span.content
                            | Preview
            div.portfolio-slider
                div.slide(v-for='keys in projects')
            div.arrows-wrapper
                div.arrows
                    i(class='fas fa-chevron-left arrow' @click='prevSlide()')
                    i(class='fas fa-chevron-right arrow' @click='nextSlide()')
        <back />
</template>
<script>
import back from './components/back.vue';
import portfolioData from './components/portfolio-data';

export default {
    name: 'Portfolio',
    data() {
        return {
            index: 0,
            projects: portfolioData,
            mouseStartX: 0,
            mouseEndX: 0,
            mouseTransition: 0
        }
    },
    components: {
        back
    },
    methods: {
        // hiding / showing slider content - begging of an animation
        sliderDisplaying() {
            const wrapper = document.querySelector('.slider-content');
            const tn = document.querySelector('.title-wrapper_name');
            const ts = document.querySelector('.title-wrapper_stack');
            const desc = document.querySelector('.description-wrapper_content');
            const icons = document.querySelector('.icons-wrapper');

            const array = [tn, ts, desc, icons];

            wrapper.style.opacity = 1;
            array.forEach((el, index) => {
                el.style.animation = `showContent .5s ease-in-out both`;
            });

            setTimeout(() => {
                array.forEach(el => {
                    el.style.animation = 'none';
                });
            }, 500);
        },
        // slider bottom menu handler
        clickedSlide() {
            const ev = event.target;
            const parent = document.querySelector('.portfolio-slider');
            const arrayChildren = Array.from(parent.children);
            const target = arrayChildren.indexOf(ev);

            this.sliderDisplaying();

            this.index = target;
            this.indexController();
        },
        // showing previous slide
        prevSlide() {
            
            this.sliderDisplaying();            

            this.index--;
            if (!this.projects[this.index]) this.index = (this.projects.length - 1);
            this.indexController();
        },
        // showing next slide
        nextSlide() {
            
            this.sliderDisplaying();

            this.index++;
            if (!this.projects[this.index]) this.index = 0;
            this.indexController();
        },
        // changing correct circle`s background
        indexController() {
            const circles = document.querySelectorAll('.slide');
            circles.forEach((el) => el.style.background = 'none');
            circles[this.index].style.backgroundColor = '#D4AF37';
        },
        // caching cursor X coordinate
        mobileSlideStart() {
            this.mouseStartX = event.touches[0].clientX;
        },
        // handling touch event to provide slide effect on mobile devices
        mobileSlideEnd() {
            this.mouseEndX = event.changedTouches[0].clientX;
            const contentBox = document.querySelector('.slider-content');
            contentBox.style.transform = 'translateX(0)';

            if ((Math.abs(this.mouseEndX-this.mouseStartX)) > 50) {
                if (this.mouseEndX > this.mouseStartX) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        },
        // implementing slider typical for mobile devices
        mobilesSlideTransition() {
            this.mouseTransition = this.mouseStartX - event.touches[0].clientX;
            const contentBox = document.querySelector('.slider-content');
            contentBox.style.transform = `translateX(${this.mouseTransition}px)`;
            contentBox.style.opacity = `${0.5-Math.abs(this.mouseTransition/1000)}`;
        }
    },
    mounted() {

        this.indexController();
        const toucher = document.querySelector('.slider-content');
        toucher.addEventListener('touchstart', this.mobileSlideStart);
        toucher.addEventListener('touchend', this.mobileSlideEnd);
        toucher.addEventListener('touchmove', this.mobilesSlideTransition);

        if (window.innerWidth > 768) {
            this.$parent.showNavbar = false;
        }

        window.addEventListener('keydown', event => {
            this.$parent.moveToLandingPage(event);
        });

        setTimeout(() => {
            const slider = document.querySelectorAll('.slide');
            slider.forEach(el => el.addEventListener('click', this.clickedSlide));
        }, 10);
    }
};
</script>
<style lang="scss">

    $gold: #D4AF37;

@keyframes showContent {
    0%{
        opacity: 0;
        transform: scale(.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

#portfolio {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 50;

    .portfolio-wrapper {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        position: relative;

        width: 100%;
        height: 100%;
        text-align: center;
        padding: 10px 5px;
        position: relative;
        z-index: 50;
        text-shadow: 0 0 2px #000;

        animation: showContent .5s ease-in-out both;

        .title-wrapper {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;

            transition: all .3s ease-in-out;

            .title-wrapper_name {
                font-size: 1.5em;
                margin: 0;
                padding: 0;
            }

            .title-wrapper_stack {
                font-size: .8em;
                margin: 0;
                padding: 0;
            }
        }

        .description-wrapper {
            padding: 5px 20px;
            margin: 20px 0;

            transition: all .3s ease-in-out;
        }

        .icons-wrapper {
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;

            font-size: 1.5em;

            a {
                z-index: 50;
                text-decoration: none;
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                color: $gold;

                transition: all .3s ease-in-out;

                .content {
                    font-size: .9em;
                }

                &:hover {
                    cursor: pointer;
                    color: lighten($gold, 20%);
                    transform: scale(1.1);
                }
            }
        }

        .portfolio-slider {
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 5%;
            left: 0;
            width: 100%;
            z-index: 50;

            .slide {
                width: 20px;
                height: 20px;
                margin: 0 10px;
                z-index: 50;

                border-radius: 50%;
                border: 2px solid $gold;
                transition: all .3s ease-in-out;

                &:hover {
                    background-color: $gold;
                    cursor: pointer;
                }
            }
        }
        .arrows-wrapper {
            width: 100%;
            position: absolute;
            bottom: 5%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;
            z-index: 50;

            .arrows {
                display: flex;
                flex-flow: row;
                align-items: center;
                justify-content: space-between;
                width: 40%;
                font-size: 1.6em;
                margin-top: 10px;

                i {
                    color: $gold;
                    opacity: .6;
                    transition: all .3s ease-in-out;
                    z-index: 50;

                    &:hover {
                        cursor: pointer;
                        opacity: 1;
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    #portfolio {

        .portfolio-wrapper {
            font-size: 1.2em;
            width: 80%;

            .title-wrapper {

                .title-wrapper_name {
                    font-size: 1.2em;
                }
            }

            .description-wrapper {
                margin: 30px 0;
            }

            .arrows-wrapper {
                bottom: 49%;
                .arrows {
                    width: 100%;
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    #portfolio {

        .portfolio-wrapper {
            width: 60%;
        }
    }
}

</style>
