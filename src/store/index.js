import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export const backendAdress = 'https://reqres.in/api';
export const correctBackendAdress = 'http://issp-slack.herokuapp.com/';
export const users = `${correctBackendAdress}/Users`
export const login = `${backendAdress}/login`;
export const register = `${backendAdress}/register`;
export const schedule = `${backendAdress}/schedule`;


export default new Vuex.Store({
  state: {
      loggingIn: false,
      registerInProgres: false,
      loginError: null,
      registerError: null,
      loginSuccessful: false,
      registerSuccessful: false,

      current_user_login: "None",
      current_user_password: "None",

      data_loaded: false,
      recieved_data: "None",
      param_state: "test",
      courses: [],
      courses_data: [],
      course_files: [],
      attendance_data: [],
  },
  mutations: {
      SET_USER_DATA(state, data){
          state.recieved_data = data.data;
          state.courses = data.data.courses;
          //state.attendance = data.data.attendance;
          state.data_loaded = true
      },
      SET_USER_CREDENTIALS(state, loginData){
        state.current_user_login = loginData.login;
        state.current_user_password = loginData.password;
     },
     SET_REGISTER_CREDENTIALS(state, registerData){
        state.current_user_login = registerData.login;
        state.current_user_password = registerData.password;
     },
    ADD_COURSE(state, course){
        state.courses_data.push(course)
    },
    ADD_ATTENDANCE(state, attendance) {
        state.attendance_data.push(attendance)
    },
      loginStart: state => state.loggingIn = true,
      loginStop: (state, errorMessage) => {
          state.loggingIn = false;
          state.loginError = errorMessage;
          state.loginSuccessful = !errorMessage;
      },
      registerStart: state => state.registerInProgres = true,
      registerStop: (state, errorMessage) => {
          state.registerInProgres = false;
          state.registerError = errorMessage;
          state.registerSuccessful = !errorMessage;
      },
      CLEAR_ALL(state){
          state.data_loaded = false;
          state.recieved_data = "None";
          state.courses = [];
          state.courses_data = [];
          state.attendance_data = [];
          state.loginSuccessful = false;
      },
      LIST_LINKS(state, data){
          state.course_files = data.data
      }
  },

  actions: {
      doLogin({ commit }, loginData) {
          commit('loginStart');
          commit('SET_USER_CREDENTIALS', loginData);
          axios.get('http://issp-slack.herokuapp.com/Users/?login=' + loginData.login + '&password='+ loginData.password , {
              ...loginData
          })
              .then(() => {
                  commit('loginStop', null)
              })
              .catch(error => {
                  commit('loginStop', error.response.data.error)
              });
              axios.get(
                'http://issp-slack.herokuapp.com/Users/?login=' + this.state.current_user_login + '&password=' + this.state.current_user_password)
            .then(resData => {commit('SET_USER_DATA', resData)})
      },
      doRegister({ commit }, registerData) {
        commit('registerStart');
        commit('SET_REGISTER_CREDENTIALS', registerData);
        axios.post('http://issp-slack.herokuapp.com/Users/?login=' + registerData.login + '&password='+ registerData.password + '&faculty=' + registerData.faculty + '&major=' + registerData.major + '&semester='+ registerData.semester , {
            ...registerData
        })
            .then(() => {
                commit('registerStop', null)
            })
            .catch(error => {
                commit('registerStop', error.response.data.error)
            });
    },

      getCourse({commit}, id){
        axios.get('http://issp-slack.herokuapp.com/Courses/' + id)
              .then(resData => {
                  commit('ADD_COURSE', resData)
              });
          axios.get('http://issp-slack.herokuapp.com//Attendance/Dates?courseId=' + id)
              .then(resData => {
                  commit('ADD_ATTENDANCE', resData)
              })
      },

      getFilesList({commit}, id){
        axios.get('http://issp-slack.herokuapp.com/Files/' + id)
        .then(resData => {
            commit('LIST_LINKS', resData)
        });
      },
      logout({commit}){
          commit('CLEAR_ALL')
      }
  },
  getters: {
      get_user_data: state => state.recieved_data,
      get_courses: state => state.courses,
      get_courses_data: state => state.courses_data,
      get_course_files: state => state.course_files,
      get_attendance: state => state.attendance_data,
   }
})
