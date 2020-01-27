import "vue-cal/dist/vuecal.css";
import UserData from "@/components/user_data/UserData.vue";
import Subject from "@/components/subject/Subject.vue";
import Calendar from "@/components/calendar/Calendar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Calendar,
    UserData,
    Subject
  },
  computed: {
    ...mapGetters(["get_courses", "get_courses_data"])
  },
  methods: {
    ...mapActions(["getCourse"])
  },
  data: () => ({
    courses_data: []
  }),
  mounted: function() {
    setTimeout(() => {
      for (var i = 0; i < this.get_courses.length; i++) {
        this.getCourse(this.get_courses[i]);
      }
      this.courses_data = this.get_courses_data;
    }, 2000);
  }
};
