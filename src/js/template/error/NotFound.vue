<template lang='pug'>
    section#not-found
        div.error-handler
            p.error
                i(class="fas fa-exclamation-triangle")
            p.header
                | 404 Page Not Found!
            p.sub-header
                | Sorry, content you are searching for does not exist :( 
</template>
<script>
export default {
    name: 'NotFound',
};
</script>
<style lang="scss">

    #not-found{
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        .error {
            font-size: 5em;
            padding: 0;
            margin: 5px 0;
        }

        .header {
            font-size: 3em;
            text-transform: uppercase;
            margin: 10px 0;
        }

        .sub-header {
            font-size: 2em;
        }
    }

    @media (max-width: 768px) {
        #not-found {
            font-size: .7em;
        }
    }

</style>
