import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export const backendAdress = 'https://reqres.in/api';
export const correctBackendAdress = 'http://issp-slack.herokuapp.com/';
export const users = `${correctBackendAdress}/Users`
export const login = `${backendAdress}/login`;
export const schedule = `${backendAdress}/schedule`;


export default new Vuex.Store({
  state: {
      loggingIn: false,
      loginError: null,
      loginSuccessful: false,

      current_user_login: "None",
      current_user_password: "None",

      recieved_data: "None",
      param_state: "test",
  },
  mutations: {
      SET_USER_DATA(state, data){
          state.recieved_data = data
      },
      SET_USER_CREDENTIALS(state, loginData){
        state.current_user_login = loginData.login;
        state.current_user_password = loginData.password;
    },

      loginStart: state => state.loggingIn = true,
      loginStop: (state, errorMessage) => {
          state.loggingIn = false;
          state.loginError = errorMessage;
          state.loginSuccessful = !errorMessage;
      }
  },

  actions: {
      doLogin({ commit }, loginData) {
          commit('loginStart');
          commit('SET_USER_CREDENTIALS', loginData);
          axios.get('http://issp-slack.herokuapp.com/Users/User?login=' + loginData.login + '&password='+ loginData.password , {
              ...loginData
          })
              .then(() => {
                  commit('loginStop', null)
              })
              .catch(error => {
                  commit('loginStop', error.response.data.error)
              });
              axios.get(
                'http://issp-slack.herokuapp.com/Users/User?login=' + this.state.current_user_login + '&password=' + this.state.current_user_password)
            .then(resData => {commit('SET_USER_DATA', resData)})
      }
  },
  getters: {
      get_user_data: state => state.recieved_data,
   }
})
