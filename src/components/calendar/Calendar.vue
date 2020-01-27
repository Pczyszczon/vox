<template>
  <div class="calendar">
    <vue-cal selected-date="2020-01-28"
    :time-from="8 * 60" 
    :time-to="19 * 60" 
    :time-step="30" 
    :events="events"
    editable-events
    :time="false"
    hide-weekends>
    </vue-cal>
  </div>
</template>

<script src="./Calendar.js"></script>
<style lang="scss">
@import "./Calendar.scss";
</style>