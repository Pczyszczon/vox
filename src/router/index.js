import Vue from 'vue'
import VeeValidate from "vee-validate";
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'


Vue.use(VueRouter)
Vue.use(VeeValidate)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
