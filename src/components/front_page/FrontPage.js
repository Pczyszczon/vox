import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import UserData from '@/components/user_data/UserData.vue'
import Subject from '@/components/subject/Subject.vue'
import {mapGetters, mapActions} from "vuex"

export default {
    components: { 
      VueCal, 
      UserData,
      Subject,
    },
    computed: {
      ...mapGetters(['get_courses', 'get_courses_data'])
    },
    methods: {
      ...mapActions(['getCourse']),
    },
    data: () => ({
        events: [
            {
              start: '2019-11-12 14:00',
              end: '2019-11-12 16:00',
              title: 'Fizyka Teoretyczna',
              class: 'leisure'
            },
            {
              start: '2019-11-13 12:00',
              end: '2019-11-13 14:00',
              title: 'Biologia',
              class: 'leisure'
            },
            {
              start: '2019-11-14 10:00',
              end: '2019-11-14 18:00',
              title: 'WF',
              class: 'sport'
            }
          ],
          courses_data: [],
    }),
    mounted: function() {
      setTimeout(() => {
      for(var i=0; i < this.get_courses.length; i++){
        this.getCourse(this.get_courses[i])
      };
      this.courses_data = this.get_courses_data
    },2000)
  }
  }