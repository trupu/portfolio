<template lang="pug">
    section#background-music
        div.audio-wrapper
            i(class='fas fa-volume-up' v-if='volumeUp' @click='audioClick()')
            i(class='fas fa-volume-mute' v-if='!volumeUp' @click='audioClick()')
            div.audio-wrapper_content
                p.author
                    | {{ audioAuthor }}
                p.name
                    | {{ audioName }}
</template>
<script>
import Cookie from 'js-cookie';
import Music from '../../../background.mp3';

export default {
    name: 'backgroundMusic',
    data() {
        return {
            volumeUp: true,
            audio: '',
            Music,
            audioAuthor: 'Hans Zimmer',
            audioName: '(S.T.A.Y) Interstellar - Main Theme'
        }
    },
    methods: {
        async audioConf() {
            const song = await this.Music;
            if (song) this.audio = new Audio(song);
            this.audio.muted = true;
            this.volumeUp = false;
            this.audio.autoplay = true;
            this.audio.volume = 0.2;
            this.audio.addEventListener('ended', () => {
                this.audio.duration = 0;
                this.audio.play();
            });
            const isMuted = Cookie.set('muted', true);
        },
        audioClick() {
            const audio = this.audio;
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
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;

            i {
                font-size: 2em;
                transition: all .3s ease-in-out;

                &:hover {
                    color: lighten($gold, 20);
                    cursor: pointer;
                }
            }

            .audio-wrapper_content {
                font-size: .6em;
                margin: 0 10px;

                .author {
                    margin: 0;
                    padding: 0;
                }

                .name {
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }

    @media (max-width: 768px) {

        #background-music {
            top: 20px;
            left: 10px;
        }
    }

</style>
