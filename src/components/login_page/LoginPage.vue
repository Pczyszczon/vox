<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <img src="@/assets/SSWJM.svg">
    
        <div class="md-body-1">STUDENCKI SEMESTR W JEDNYM MIEJSCU </div>
      </div>

      <div class="form">
        <md-field>
          <label>Użytkownik: </label>
          <md-input v-model="login.user" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Hasło: </label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
           <a href="/register">Załóż konto</a>
          <md-button class="md-raised md-primary" @click="auth">Log in</md-button>   
      </div>

    </md-content>
    <div class="background" />
  </div>
</template>

<script src="./LoginPage.js"></script>
<style lang="scss">
  @import "./LoginPage.scss";
</style>

