import FrontPage from '@/components/front_page/FrontPage.vue'
import LoginPage from '@/components/login_page/LoginPage.vue'

import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    FrontPage,
    LoginPage
},
 computed:
    mapState(['loginSuccessful']),
}
