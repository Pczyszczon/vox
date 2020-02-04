import axios from "axios"
import { mapState, mapActions } from 'vuex';

export default {
    name: "register",
    data() {
      return {
        loading: false,
        user: {
          login: "",
          password: "",
          faculty: "",
          major: "",
          semester: ""
        }
      };
    },
    computed: {
      ...mapState([
          'registerInProgress',
          'registerError',
          'registerSuccessful',
          'loadingData'
      ])
  },
    methods: {
      ...mapActions(['doRegister']),
      auth() {
        this.doRegister({
            login: this.user.login,
            password: this.user.password,           
            faculty: this.user.faculty,      
            major: this.user.major,      
            semester: this.user.semester                           
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
  };