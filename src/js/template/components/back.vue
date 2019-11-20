<template lang="pug">
    div.back
        | press 
        strong
            | ESC 
        | to back
</template>
<script>
export default {
    name: 'back',
};
</script>
<style lang="scss">

@keyframes pulse {
    0% {
        opacity: .9;
    }
    50% {
        opacity: .1;
    }
    100% {
        opacity: .9;
    }
}

.back {
    display: none;
}


@media(min-width: 768px) {
    .back {
        position: absolute;
        bottom: 30px;
        left: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        animation: pulse 2s ease-in-out infinite both;

        font-size: 12px;
        text-transform: uppercase;

        strong {
            font-size: 1.2em;
            margin: 0 5px;
        }
    }
}
</style>