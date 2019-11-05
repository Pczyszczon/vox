import { mapState, mapActions } from 'vuex';

export default {
    name: 'LoginPage',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapState([
                'loggingIn',
                'loginError',
                'loginSuccessful'
            ])
        },
        methods: {
            ...mapActions([
                'doLogin'
            ]),
            loginSubmit() {
                this.doLogin({
                    email: this.email,
                    password: this.password
                })
            }
        }
    }

