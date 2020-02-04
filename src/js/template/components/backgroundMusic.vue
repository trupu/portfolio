<template lang="pug">
    section#background-music
        div.audio-wrapper
            i(class='fas fa-volume-up' v-if='volumeUp' @click='audioClick()')
            i(class='fas fa-volume-mute' v-if='!volumeUp' @click='audioClick()')
            div.audio-wrapper_content
                p.author
                    | {{ audioList[0].author }}
                p.name
                    | {{ audioList[0].title }}
</template>
<script>
import Music from '../../../background.mp3';

export default {
    name: 'backgroundMusic',
    data() {
        return {
            volumeUp: true,
            audio: '',
            Music,
            audioList: [
                {
                    author: 'Hans Zimmer',
                    title: '(S.T.A.Y) Interstellar - Main Theme'
                }
            ]
        }
    },
    methods: {
        async audioConf() {
            const song = await this.Music;
            console.log(song);
            if (song) this.audio = new Audio(song);

            this.audio.muted = true;
            this.volumeUp = false;
            this.audio.volume = 0.2;
            this.audio.addEventListener('ended', () => {
                window.sessionStorage.setItem('playing', false);
                this.audio.muted = true;
                this.volumeUp = false;
            });
        },
        audioClick() {
            const audio = this.audio;

            // checking if session exists
            if (!this.audioStatus()) {
                audio.play();
            }

            if (this.volumeUp) {
                audio.muted = true;
                this.volumeUp = false;
            } else {
                audio.muted = false;
                this.volumeUp = true;
            }
        },
        audioStatus() {
            const audioStatus = window.sessionStorage.getItem('playing');
            return audioStatus ? true : false;
        }
    },
    mounted() {
            this.audioConf();
    },
    destroyed() {
        window.sessionStorage.setItem('playing', false);
    }
};

</script>
<style lang="scss">

    $gold: #D4AF37;

    #background-music {
        position: absolute;
        top: 50px;
        left: 50px;
        z-index: 140;

        .audio-wrapper {
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;
            z-index: 141;

            i {
                font-size: 2em;
                transition: all .3s ease-in-out;
                z-index: 142;

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
