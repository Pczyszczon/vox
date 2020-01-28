<template>
  <div class="action">
    <div class="calendar">
      <vue-cal
        selected-date="2020-01-28"
        hide-view-selector
        :time-from="8 * 60"
        :time-to="20 * 60"
        :disable-views="['years', 'year', 'month', 'day']"
        hide-weekends
        :events="events"
        :on-event-dblclick="onEventClick"
      >
      </vue-cal>
    </div>
  </div>
</template>

<script src="./Calendar.js"></script>
<style lang="scss">
@import "./Calendar.scss";
</style>
