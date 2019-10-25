<template lang='pug'>
    section#landing-page
        div.landing-flex-wrapper
            div.title
                p.header
                    | Developer, Programmer
                p.sub-header
                    | Open Mind & Slight Edge
</template>
<script>
export default {
    name: 'LandingPage',
};
</script>
<style lang='scss'>
    #landing-page{
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;


        .landing-flex-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .title {

            width: 60%;
            height: auto;

            display: flex;
            flex-flow: column;
            align-content: center;
            justify-content: center;
            padding-bottom: 5%;
            user-select: none;

            .header {
                font-size: 3.3em;
                margin: 0;
                padding: 0;
                text-align: right;

                width: 100%
            }

            .sub-header {
                font-size: 1.8em;
                margin: 5px 0;
                padding: 0;
                text-align: right;
                text-transform: uppercase;
                width: 100%;
            }
        }
        
    }

    @media (max-width: 1024px) {
        #landing-page {
            .title {
                width: 60%;
                font-size: .7em;
            }
        }
    }

    @media (max-width: 768px) {
        #landing-page {
            .title {
                font-size: .8em;

                .header {
                    text-align: center;
                }

                .sub-header {
                    text-align: center;
                    margin: 20px 0;
                    font-size: 1.5em;
                }
            }
        }     
    }

    @media (max-width: 480px) {
        #landing-page {
            .title {
                font-size: .7em;
            }
        }
    }
</style>
