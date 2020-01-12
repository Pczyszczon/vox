import FrontPage from '@/components/front_page/FrontPage.vue'
import LoginPage from '@/components/login_page/LoginPage.vue'

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    FrontPage,
    LoginPage
  },
  computed: {
    ...mapState(['data_loaded'])
  },
  methods: {
    ...mapActions(['logout']),
    logout_me() {
      this.logout;
    },
  },
}
