<template lang="pug">
    section#about
        div.about-container
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Personal Information
                    p.content
                        | My name is Sławek Trubiłowicz and I am 20years old. I live in Kożuchów, Poland. I`ve been dreaming about being computer programmer since I graduated from secondary school. Thats probably why I`ve chosen the IT Specialist specialisation in highschool. School gave me some IT background knowledge, which I`m continuously developing. I`m rather an introvert and strict mind, what appears in my hobby - about later :)
                div.img-holder
                    img(src='../../img/okladka.jpg')    
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Skills
                    p.content
                        | I know that I`m a junior developer, without the industry experience. However, I`ve developed some skills needed as a Web Developer. <br /> Technologies I`ve been working with: 
                        ul.skills-list
                            li
                                | Standard:
                            ol
                                li
                                    | HTML5,
                                li
                                    | CSS3(RWD - Flexbox, CSS Grid, Bootstrap),
                                li
                                    | JS (jQuery, ES6, ES8 Promises, ES10+ fe. Optional Chaining),
                            li
                                | Frameworks:
                            ol
                                li
                                    | Vue.js (Templates, SFC, Clientside Routing, Data manipulation),
                                li
                                    | Express.js (REST Api, http/https Web Server),
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
                    img(src='../../img/webpacklogo.png')
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
                div.img-holder
                    img(src='../../img/graduation.png')
            div.info-wrapper
                div.content-wrapper
                    h3
                        | Hobby
                    p.content
                        | Mainly I`m a powerlifter, however I also love to play logical games (like chess). Furthermore Math and Physics (I`m into astrophysics) aren`t scary for me :)
                div.img-holder
                    img(src='../../img/atom.png')
</template>
<script>
export default {
    name: 'About',
    mounted() {
        window.addEventListener('keydown', event => {
            this.$parent.moveToLandingPage(event);
        });
    }
};
</script>
<style lang="scss">

.main {
    z-index: 30;
}

#about {
    overflow-y: hidden;
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
                    width: 80%;
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
                        width: 40%;
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
        .about-container {
            .info-wrapper {
                flex-flow: row;

                .img-holder {
                    img {
                        width: 80%;
                    }
                }
            }

            .info-wrapper:nth-child(2), .info-wrapper:nth-child(4), .info-wrapper:nth-child(6) {
                flex-flow: row-reverse;
            }
        }
    }
}

</style>