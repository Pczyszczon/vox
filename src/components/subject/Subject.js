import {mapGetters, mapActions} from "vuex"
import Uploader from '@/components/uploader/Uploader.vue'

export default {
      name: 'Subject',
      components: {
        Uploader
      },
      computed: {
        ...mapGetters(['get_courses_data', 'get_courses', 'get_course_files'])
      },
      data: () => ({
        selected_course: 0,
        showDialog: false
      }),
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
        }
      }
}