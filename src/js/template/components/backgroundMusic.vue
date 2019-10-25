<template lang="pug">
    section#background-music
        div.audio-wrapper
            audio.audio(controls)
                source(src='../../../background.mp3')
                | Your browser does not support the audio element :(
            i(class='fas fa-volume-up' v-if='volumeUp' @click='audioClick()')
            i(class='fas fa-volume-mute' v-if='!volumeUp' @click='audioClick()')
</template>
<script>
import Cookie from 'js-cookie';

export default {
    name: 'backgroundMusic',
    data() {
        return {
            volumeUp: true,
        }
    },
    methods: {
        audioConf() {
            const audio = document.querySelector('.audio');
            if (audio) {
                audio.play();
            } else {
                setTimeout(() => {
                    if (audio) audio.play();
                }, 5);
            }
            const isMuted = Cookie.get('muted');
            if (isMuted === 'true') {
                audio.muted = true;
                this.volumeUp = false;
            } else {
                audio.muted = false;
                this.volumeUp = true;
            }
        },
        audioClick() {
            const audio = document.querySelector('.audio');
            if (this.volumeUp) {
                audio.muted = true;
                this.volumeUp = false;
                Cookie.set('muted', true);
            } else {
                audio.muted = false;
                this.volumeUp = true;
                Cookie.set('muted', false);
            }
        }
    },
    mounted() {
            this.audioConf();
    }
};

</script>
<style lang="scss">

    $gold: #D4AF37;

    #background-music {
        position: absolute;
        top: 50px;
        left: 50px;
        z-index: 100;

        .audio-wrapper {
            audio {
                display: none;
            }

            i {
                font-size: 2em;
                transition: all .3s ease-in-out;

                &:hover {
                    color: lighten($gold, 20);
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 768px) {

        #background-music {
            top: 20px;
        }
    }

</style>
