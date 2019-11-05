<template>
    <div class="login">
        <div v-if="loggingIn" class="container-loading">
            <img height ="150px" width="80px"src="/loading.gif" alt="Loading Icon">
        </div>
        <p v-if="loginError">{{ loginError }}</p>
        <p v-if="loginSuccessful">Login Successful</p>
        <form @submit.prevent="loginSubmit">
            <input type="email" placeholder="E-Mail" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script src="./LoginPage.js"></script>
<style src="./LoginPage.css"></style>
