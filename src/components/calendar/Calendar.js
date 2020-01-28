import VueCal from "vue-cal";
import Subject from "@/components/subject/Subject.vue";
import "vue-cal/dist/vuecal.css";
import { mapGetters, mapActions } from "vuex";
import EventBus from '@/components/event_bus/Event_bus'

export default {
  components: {
    VueCal,
    Subject
  },
  data: () => ({
    selectedEvent: {},
    events: [
      {
        courseId:1,
        start: "2020-01-27 16:00",
        end: "2020-01-27 18:00",
        title: "Podstawy grafiki komputerowej",
        class: "lecture"
        // vue-cal issue,
        // https://github.com/antoniandre/vue-cal/issues/55
        // repeat: {
        //   weekdays: [1, 3], // You can repeat on multiple days of the week.
        //   until: '2020-11-30' // Don't need a time here as it will take the same as original event date.
        // }
      },
      {
        courseId:2,
        start: "2020-01-28 12:30",
        end: "2020-01-28 14:00",
        title: "Podstawy grafiki komputerowej",
        class: "lab"
      },
      {
        courseId:3,
        start: "2020-01-28 15:00",
        end: "2020-01-28 16:30",
        title: "Seminarium inżynierskie g1",
        class: "seminar"
      },
      {
        courseId:4,
        start: "2020-01-28 15:00",
        end: "2020-01-28 16:30",
        title: "Seminarium inżynierskie g2",
        class: "seminar"
      },
      {
        courseId:5,
        start: "2020-01-28 16:45",
        end: "2020-01-28 18:15",
        title: "Zespołowy projekt programistyczny",
        class: "lab"
      },
      {
        courseId:6,
        start: "2020-01-29 14:00",
        end: "2020-01-29 16:00",
        title: "Psychologiczne i ekonomiczne podstawy przedsiębiorczości",
        class: "lecture"
      },
      {
        courseId:7,
        start: "2020-01-29 17:15",
        end: "2020-01-29 19:30",
        title: "Programowanie gier komputerowych",
        class: "lab"
      },
      {
        courseId:8,
        start: "2020-01-30 08:00",
        end: "2020-01-30 10:00",
        title: "Metodologia prow. projektu programist.",
        class: "lecture"
      },
      {
        courseId:9,
        start: "2020-01-30 10:00",
        end: "2020-01-30 11:00",
        title: "Projekt aplikacji mobilnej 2.",
        class: "lab"
      },
      {
        courseId:10,
        start: "2020-01-30 13:15",
        end: "2020-01-30 15:00",
        title: "Elementy mech. Teoretycznej",
        class: "lecture"
      },
      {
        courseId:11,
        start: "2020-01-30 15:15",
        end: "2020-01-30 17:00",
        title: "Elementy mech. Teoretycznej",
        class: "lab"
      }
    ]
  }),
  methods: {
    onEventClick(event, e) {
      this.selectedEvent = event;
      EventBus.$emit('selectCourse', event.courseId);
      console.log(event.class);
      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation(); 
    }
  }
};
