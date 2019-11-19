import { mapState, mapActions } from 'vuex';

export default {
    name: 'LoginPage',
        data() {
            return {
                login: '',
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
                    login: this.login,
                    password: this.password
                })
            }
        }
    }

