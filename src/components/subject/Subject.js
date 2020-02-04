import {mapGetters, mapActions} from "vuex"
import Uploader from '@/components/uploader/Uploader.vue'
import EventBus from '@/components/event_bus/Event_bus'
import axios from 'axios';

export default {
      name: 'Subject',     
      components: {
        Uploader,
        EventBus
      },
      computed: {
          ...mapGetters(['get_courses_data', 'get_courses', 'get_course_files', 'get_attendance']),
          //course_dates: {
          //    // getter
          //    get: function () {
          //        return this.course_dates
          //    },
          //    // setter
          //    set: function (newValue) {
          //        var date = newValue[0] + "." + newValue[1] + "." + newValue[2]
          //        this.course_dates = date
          //    }
          //} 
      },
      data: () => ({
        attendance_all: [],
        chosen_date: "",
        attendance_data: [],
        selected_course: 0,
        showDialog: false
      }),
      created() {
        EventBus.$on('selectCourse', (data) => {
          this.selected_course=data;
        })
      },
        mounted() {
            axios
                .get('http://issp-slack.herokuapp.com/Attendance/All')
                .then(response => (this.attendance_all = response.data))
        },

        filters: {
            dateformat(value) {
                return value[0] + "-" + value[1] + "-" + value[2]
            }
        },
      methods: {
        ...mapActions(['getFilesList']),
        prev() {
          if (this.selected_course != 0){
            this.selected_course = this.selected_course - 1
          }
        },
        next() {
          if (this.selected_course != (this.get_courses.length - 1) ){
              this.selected_course = this.selected_course + 1
          }
        },
        open() {
          this.getFilesList(this.get_courses_data[this.selected_course].data.course.id);
          this.showDialog = true
          },
        send() {
          //this.chosen_date = "";
          axios.post('http://issp-slack.herokuapp.com/Attendance/', {
            body: {
                "presentUsers": { "1": { "firstValue": true, "secondValue": true } },
                "attendanceListId": 2
            }
          })
            .then(response => { console.log(response.data) })
            .catch(e => {
                this.errors.push(e)
            })
          },
          onChange: function () {
              this.chosen_date = event.target.options[event.target.options.selectedIndex].text
          }

      }
}