// żadna z metod tu nie jest podpięta

import {mapActions, mapGetters} from "vuex"

export default {
  name: 'app',

  methods: {
//"..." to coś jak odpakowanie paczki Akcji ze store'a
      ...mapActions({action_name_for_file: "action_name_from_store"}),
      standard_js_function(argument) {
          this.$store.commit("MUTATION_NAME", argument)
      },
      use_action_declared_above() {
          this.action_name_for_file()
      }
  },
  computed: {
// computed to w zasadzie property jak w pythonie - wrzuca się {{getter_name_for_file}}
// inline w pliku vue i to śmiga
      ...mapGetters({getter_name_for_file: "getter_name_from_store"})
  },
  data(){
      return {
          catch_inputs_like_that: ''
      }
  }
}
