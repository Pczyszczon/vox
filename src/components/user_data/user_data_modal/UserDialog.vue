<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-card>
        <md-card-header>
          <md-avatar>
            <img src="@/assets/SSWJM.svg" alt="People" />
          </md-avatar>
          <div class="md-title">
            {{ IsDataAvailable(get_user_data.user.login) }}
          </div>
          <div class="md-subhead">
            {{ IsDataAvailable(get_user_data.user.role) }}
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-subhead">
            Rola: {{ IsDataAvailable(get_user_data.user.role) }}
          </div>
          <div class="md-subhead">
            Wydział: {{ IsDataAvailable(get_user_data.user.faculty) }}
          </div>
          <div class="md-subhead">
            Specjalizacja: {{ IsDataAvailable(get_user_data.user.major) }}
          </div>
          <div class="md-subhead">
            Semestr: {{ IsDataAvailable(get_user_data.user.semester) }}
          </div>
        </md-card-content>

        <md-dialog-actions>
          <md-button class="md-raised md-primary" @click="showDialog = false"
            >Zamknij</md-button
          >
        </md-dialog-actions>
      </md-card>
    </md-dialog>

    <md-button class="md-primary" @click="showDialog = true"
      >DANE UŻYTKOWNIKA</md-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "userDialog",
  data: () => ({
    showDialog: false
  }),
  methods: {
    IsDataAvailable(data) {
      return data ? data : "Brak informacji";
    }
  },
  computed: {
    ...mapGetters({ get_user_data: "get_user_data" })
  }
};
</script>

<style scoped src="./UserDialog.css"></style>
