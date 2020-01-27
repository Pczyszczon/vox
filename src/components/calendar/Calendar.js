import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
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
    events: [
      {
        start: "2020-01-31 14:00",
        end: "2020-01-31 16:00",
        title: "Fizyka Teoretyczna",
        class: "lecture"
      },
      {
        start: "2020-01-31 17:00",
        end: "2020-01-31 18:00",
        title: "Chemia",
        class: "lecture"
      },
      {
        start: "2020-01-30 12:00",
        end: "2020-01-30 14:00",
        title: "Biologia",
        class: "lecture"
      },
      {
        start: "2020-01-28 10:00",
        end: "2020-01-28 12:00",
        title: "WF",
        class: "sport"
      }
    ]
  }),
  mounted: function() {
  }
};
