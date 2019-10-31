<template>
  <div v-if="loginSuccessful === true" class="home">
      <FrontPage/>
  </div>
  <div v-else>
      <LoginPage/>
  </div>
</template>

<script src="./Home.js"></script>
