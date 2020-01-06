import { mapState, mapActions } from 'vuex';

export default {
    name: 'LoginPage',
        data() {
            return {
              login: {
                user: "",
                password: ""
              }
            };
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
            auth() {
                this.doLogin({
                    login: this.login.user,
                    password: this.login.password,                    
                })                
              }
        }
    }

