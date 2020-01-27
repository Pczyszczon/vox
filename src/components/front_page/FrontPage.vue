<template>
  <div class="front_page">
    <vue-cal selected-date="2020-01-28"
    :time-from="8 * 60" 
    :time-to="19 * 60" 
    :time-step="30" 
    :events="events"
    editable-events
    :time="false"
    hide-weekends>
    </vue-cal>
      <!-- <UserData/> -->
      <!--:time="false"-->
      <Subject/>
  </div>
</template>

<script src="./FrontPage.js"></script>
<style src="./FrontPage.css"></style>
