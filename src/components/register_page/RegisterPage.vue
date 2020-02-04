<template>
  <div>
    <div class="centered-container">
      <md-content class="md-elevation-3">
        <div class="title">
          <img src="@/assets/SSWJM.svg" />

          <div class="md-body-1">STUDENCKI SEMESTR W JEDNYM MIEJSCU</div>
        </div>
        <div class="form">
          <md-field>
            <label>Login</label>
            <md-input v-model="user.firstName" autofocus></md-input>
          </md-field>
          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="user.password" type="password"></md-input>
          </md-field>
          <md-field>
            <label>Faculty</label>
            <md-input v-model="user.faculty" ></md-input>
          </md-field>
          <md-field>
            <label>Major</label>
            <md-input v-model="user.major" ></md-input>
          </md-field>
          <md-field>
            <label>Semester</label>
            <md-input v-model="user.semester" type="Number"></md-input>
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center-space-between">
          <md-button class="md-raised md-primary" @click="auth"
            >Create Account</md-button
          >
        </div>

        <div class="loading-overlay" v-if="loading">
          <md-progress-spinner
            md-mode="indeterminate"
            :md-stroke="2"
          ></md-progress-spinner>
        </div>
      </md-content>
      <div class="background" />
    </div>
  </div>
</template>

<script src="./RegisterPage.js"></script>
<style lang="scss">
@import "./RegisterPage.scss";
</style>
