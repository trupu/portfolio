<template lang="pug">
    section#preload
        div.preload-flex
            svg.circle
                circle(cx='100' cy='100' r='97')
                circle(cx='100' cy='100' r='92')
            div.preload-title
                | Trupu
</template>
<script>
export default {
    name: 'preload',
};
</script>
<style lang="scss">
    
    $gold: #D4AF37;

@keyframes spin {
    0%{
        transform: rotate(0deg);
        opacity: 1;
    }
    50% {
        opacity: .8;
        
    }
    100% {
        transform: rotate(360deg);
        opacity: 1;
    }
}



@keyframes changeTitleColor {
    0% {
        color: $gold;
        opacity: 1;
    }
    50% {
        opacity: .6;
        color: cyan;
    }
    100% {
        color: $gold;
        opacity: 1;
    }
}

@keyframes showPreload {
    0% {
        opacity: 0;
        transform: scale(.6);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes hidePreload {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(.6);
    }
}

    #preload {
        width: 100%;
        height: 100vh;

        background-color: #000;

        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 500;

        transition: opacity .5s ease-in-out;

        .preload-flex {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;

            width: 100%;
            font-size: 20px;
            text-transform: uppercase;
            position: relative;

            animation: showPreload .5s ease-in-out both;

            svg {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 200px;

                circle {
                    fill: #000;
                    stroke-width: 3px;
                    stroke: $gold;
                    transform-origin: center center;
                }

                circle:nth-child(1) {
                    stroke-dasharray: 150;
                    stroke-dashoffset: 0;

                    animation: spin 2s both infinite linear;
                }

                circle:nth-child(2) {
                    stroke-dasharray: 140;
                    stroke-dashoffset: 150;
                    stroke: cyan;

                    animation: spin 1.8s both infinite linear reverse;
                }
            }

            .preload-title {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: 0;
                left: 0;

                width: 100%;
                height: 200px;
                font-size: 1.5em;

                animation: changeTitleColor 2s ease-in-out infinite;
            }
        }
    }

</style>