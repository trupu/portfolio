<template lang="pug">
    section#portfolio
        div.portfolio-wrapper
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
</template>
<script>
import portfolioData from './components/portfolio-data';

export default {
    name: 'Portfolio',
    data() {
        return {
            index: 0,
            projects: portfolioData,
            mouseStartX: 0,
            mouseEndX: 0
        }
    },
    methods: {
        prevSlide() {
            this.index--;
            if (!this.projects[this.index]) this.index = (this.projects.length - 1);
            this.indexController();
        },
        nextSlide() {
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
            if ((Math.abs(this.mouseEndX-this.mouseStartX)) > 50) {
                if (this.mouseEndX > this.mouseStartX) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        }
    },
    mounted() {
        this.indexController();
        const toucher = document.querySelector('.portfolio-wrapper');
        toucher.addEventListener('touchstart', this.mobileSlideStart);
        toucher.addEventListener('touchend', this.mobileSlideEnd);
    }
};
</script>
<style lang="scss">

    $gold: #D4AF37;

#portfolio {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    .portfolio-wrapper {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        text-align: center;
        padding: 10px 5px;
        position: relative;
        z-index: 40;

        .title-wrapper {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;

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
            bottom: 20%;
            left: 0;
            width: 100%;

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
            bottom: 20%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;

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
            z-index: 0;

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
