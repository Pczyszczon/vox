import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
      loggingIn: false,
      loginError: null,
      loginSuccessful: false,

      recieved_data: "None",
      param_state: "test",
  },
  mutations: {
      MUTATION_NAME(state, data){
          state.recieved_data = data
      },

      loginStart: state => state.loggingIn = true,
      loginStop: (state, errorMessage) => {
          state.loggingIn = false;
          state.loginError = errorMessage;
          state.loginSuccessful = !errorMessage;
      }
  },
  // przykładowa akcja do zapytania z API
  actions: {
      /*action_name_from_store({commit}){
			axios.get(`http://api.brewerydb.com/v2/beers/?key=f373b8ccc44c9ca5aec073ddfdcdffe0`, {
				params: {
					param_for_api: this.state.param_state
				}
			}).then(resData => {commit('MUTATION_NAME', resData.data
      },
      */
      doLogin({ commit }, loginData) {
          commit('loginStart');

          axios.get('http://issp-slack.herokuapp.com/Users/User?login=' + loginData.login + '&password='+ loginData.password , {
              ...loginData
          })
              .then(() => {
                  commit('loginStop', null)
              })
              .catch(error => {
                  commit('loginStop', error.response.data.error)
              })
      }
  },
  getters: {
      getter_name_from_store: state => state.recieved_data,
   }
})
