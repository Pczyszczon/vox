import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      recieved_data: "None",
      param_state: "test",
  },
  mutations: {
      MUTATION_NAME(state, data){
          state.recieved_data = data
      }
  },
  // przykładowa akcja do zapytania z API
  actions: {
      action_name_from_store({commit}){
			axios.get(`http://api.brewerydb.com/v2/beers/?key=f373b8ccc44c9ca5aec073ddfdcdffe0`, {
				params: {
					param_for_api: this.state.param_state
				}
			}).then(resData => {commit('MUTATION_NAME', resData.data)})
		}
  },
  getters: {
      getter_name_from_store: state => state.recieved_data,
   }
})
