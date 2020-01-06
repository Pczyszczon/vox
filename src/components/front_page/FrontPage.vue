<template>
  <div class="front_page">
    <vue-cal selected-date="2019-11-12"
    :time-from="8 * 60" 
    :time-to="19 * 60" 
    :time-step="30" 
    :events="events">
    </vue-cal>
    <div>
      <UserData/>
    </div>
  </div>
</template>

<script src="./FrontPage.js"></script>
<style src="./FrontPage.css"></style>
