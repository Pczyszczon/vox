import FrontPage from '@/components/front_page/FrontPage.vue'
import LoginPage from '@/components/login_page/LoginPage.vue'
import RegisterPage from '@/components/register_page/RegisterPage.vue'
import UserDialog from '@/components/user_data/user_data_modal/UserDialog.vue'

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    FrontPage,
    LoginPage,
    RegisterPage,
    UserDialog
  },
  computed: {
      ...mapState(['data_loaded']),
      ...mapActions(['logout'])
  },
  methods: {
      logout_me() { 
       this.logout
        //second method
       //this.$store.dispatch('logout')
    },
  },
}
