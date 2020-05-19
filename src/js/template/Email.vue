<template lang="pug">
    section#email-me
        form.email-wrapper(method='POST')
            span.form-title
                | Contact Me
            label
                input(type='text' name='title' placeholder='title' v-model='title')
            label
                input(type='email' name='email' placeholder='your email' v-model='email')
            label
                | Message:
                textarea(cols='35' rows='5' name='message' v-model='message')
            label.send
                button#send-mail(@click='sendEmail()')
                    | Send
            label.status(v-if='status' :class='statusClass')
                | {{ statusMessage }}
        <back />
</template>
<script>
import back from './components/back.vue';
import emailData from '../config/emailData';

export default {
    name: 'Email',
    components: {
        back
    },
    data() {
        return {
            emailData,
            title: '',
            email: '',
            message: '',
            status: false,
            statusMessage: '',
            statusClass: ''
        }
    },
    methods: {
        // form validation
        validateEmail() {
            if (this.title === '' || this.email === '' || this.message === '') {
                return false;
            }
        },
        // avoiding spam sending
        spamAvoider() {
            const last = window.localStorage.getItem('lastlySent');
            if (!last) return 'OK';
            if ((Date.now() - last)/3600000 > 1) return 'OK';
            return 'NOPE';
        },
        // sending email via smtp API
        sendingMail(data) {
            return new Promise(async (resolve, reject) => {
                try {
                    const status = await Email.send({
                        Host: data.host,
                        Username : data.myemail,
                        Password : data.mypass,
                        To : data.receiver,
                        From : data.myemail,
                        Subject : this.title,
                        Body : `${this.message} Sender: ${this.email}`
                    });  
                    resolve(status);
                } catch (err) {
                    reject(err);
                };
            });
        },
        // handling form UI/UX
        async sendEmail() {
            event.preventDefault();

            // STEP I

            if (this.validateEmail() === false) {
                this.status = true;
                this.statusMessage = 'You cannot send blank emails!';
                this.statusClass = 'wrong';
                return;
            }

            // STEP II

            const spam = this.spamAvoider();
            if (spam !== 'OK') {
                this.status = true;
                this.statusMessage = 'You cannot send more than single message per hour!';
                this.statusClass = 'wrong';
                return;
            }

            // STEP III

            const data = this.emailData;
            const status = await this.sendingMail(data);
            if (status === 'OK') {
                window.localStorage.setItem('lastlySent', Date.now());
                this.status = true;
                this.statusMessage = 'Email has been sent succesfully!';
                this.statusClass = 'success';
            } else {
                this.status = true;
                this.statusMessage = 'Something went wrong with sending Email! :('
                this.statusClass = 'wrong';
            }
        }
    },
    mounted() {
         window.addEventListener('keydown', event => {
            this.$parent.moveToLandingPage(event);
        });
    }
};
</script>
<style lang="scss">

    $gold: #D4AF37;

    #email-me {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        .email-wrapper {
            display: flex;
            flex-flow: column;
            width: 100%;
            height: 100%;
            padding: 0 10px;

            align-items: center;
            justify-content: center;

            font-size: 16px;
            z-index: 50;

            .form-title {
                font-size: 2.5em;
                text-transform: uppercase;
                line-height: 2;
                margin: 20px 0;
            }

            label {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                width: 100%;

                font-size: 1.2em;

                input {
                    background-color: rgba(0,0,0,.5);
                    border: none;
                    border-bottom: 1px solid $gold;
                    font-size: 1.5em;
                    color: $gold;
                    width: 100%;
                    margin: 20px 0;
                }

                input::placeholder {
                    color: darken($gold, 30%);
                }

                textarea {
                    background-color: rgba(0,0,0,.5);
                    border: 1px solid $gold;
                    color: $gold;
                    font-size: 1em;
                    max-width: 100%;
                }

                button {
                    width: 120px;
                    height: 40px;
                    font-size: 1.5em;
                    padding: 1px 3px;
                    border: none;
                    background-color: $gold;
                    color: #000;

                    transition: all .3s ease-in-out;

                    margin: 10px 0;

                    &:hover {
                        cursor: pointer;
                        color: #fff;
                    }
                }
            }
            .send {
                align-items: flex-end;
            }

            .status {
                font-size: .8em;
                text-align: center;
            }

            .success {
                color: cyan;
            }

            .wrong {
                color: red;
            }
        }
    }

@media (min-width: 480px) {
    #email-me {
        .email-wrapper {
            width: 80%;
        }
    }
}

@media (min-width: 768px) {
    #email-me {
        .email-wrapper {
            width: 60%;
        }
    }
}

@media (min-width: 1024px) {
    #email-me {
        .email-wrapper {
            width: 40%;
        }
    }
}

</style>
