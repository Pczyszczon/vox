<template>
  <div v-if="data_loaded === true" class="home">
        <div class="page-container md-layout-column">
           <md-toolbar class="md-primary">
            <md-button class="logout_button" :md-ripple="false" @click="logout_me">Logout</md-button>
            </md-toolbar>
            <md-content>
            <FrontPage/>
                 </md-content>
            </div>
  </div>
  <div v-else>
      <LoginPage/>
  </div>
</template>

<script src="./Home.js"></script>
