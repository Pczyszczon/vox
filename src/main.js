import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
