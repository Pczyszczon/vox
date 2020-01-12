import { mapState, mapActions } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import Vue from 'vue';
Vue.use(Loading);

export default {
    name: 'LoginPage',
        data() {
            return {
              login: {
                user: "",
                password: "",
                fullPage: true
              }
            };
          },
        computed: {
            ...mapState([
                'loggingIn',
                'loginError',
                'loginSuccessful',
                'loadingData'
            ])
        },
        methods: {            
          ...mapActions(['doLogin']),
            auth() {
                this.doLogin({
                    login: this.login.user,
                    password: this.login.password,                    
                });
                this.submit()
              },
            submit() {
              let loader = this.$loading.show({
                  container: this.fullPage,
                  loader: 'bars',
              });
              setTimeout(() => {
                loader.hide()
              },3500)
            }  
        }
    }
