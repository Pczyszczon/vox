import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import 'vue-cal/dist/i18n/pl.js'
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    VueCal
  },
  computed: {
    ...mapGetters(["get_courses", "get_courses_data"])
  },
  methods: {
    ...mapActions(["getCourse"])
  },
  data: () => ({
    selectedEvent: {},
    events: [
      {
        start:  "2020-01-27 16:00",
        end:    "2020-01-27 18:00",
        title:  "Podstawy grafiki komputerowej",
        class:  "lecture"
        // vue-cal issue, 
        // https://github.com/antoniandre/vue-cal/issues/55
        // repeat: {
        //   weekdays: [1, 3], // You can repeat on multiple days of the week.
        //   until: '2020-11-30' // Don't need a time here as it will take the same as original event date.
        // }
      },
      {
        start:  "2020-01-28 12:30",
        end:    "2020-01-28 14:00",
        title:  "Podstawy grafiki komputerowej",
        class:  "lab"
      },
      {
        start:  "2020-01-28 15:00",
        end:    "2020-01-28 16:30",
        title:  "Seminarium inżynierskie g1",
        class:  "seminar"
      },
      {
        start:  "2020-01-28 15:00",
        end:    "2020-01-28 16:30",
        title:  "Seminarium inżynierskie g2",
        class:  "seminar"
      },
      {
        start:  "2020-01-28 16:45",
        end:    "2020-01-28 18:15",
        title:  "Zespołowy projekt programistyczny",
        class:  "lab"
      },
      {
        start:  "2020-01-29 14:00",
        end:    "2020-01-29 16:00",
        title:  "Psychologiczne i ekonomiczne podstawy przedsiębiorczości",
        class:  "lecture"
      },
      {
        start:  "2020-01-29 17:15",
        end:    "2020-01-29 19:30",
        title:  "Programowanie gier komputerowych",
        class:  "lab"
      },
      {
        start:  "2020-01-30 08:00",
        end:    "2020-01-30 10:00",
        title:  "Metodologia prow. projektu programist.",
        class:  "lecture"
      },
      {
        start:  "2020-01-30 10:00",
        end:    "2020-01-30 11:00",
        title:  "Projekt aplikacji mobilnej 2.",
        class:  "lab"
      },
      {
        start:  "2020-01-30 13:15",
        end:    "2020-01-30 15:00",
        title:  "Elementy mech. Teoretycznej",
        class:  "lecture"
      },      {
        start:  "2020-01-30 15:15",
        end:    "2020-01-30 17:00",
        title:  "Elementy mech. Teoretycznej",
        class:  "lab"
      }
    ]
  }),
  methods: {
    onEventClick (event, e) {
      this.selectedEvent = event  
      console.log("test")
      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    }
  }
};
