<template>
  <div>
   <h2>{{get_courses_data[this.selected_course].data.course.name}}</h2>
   <h3>{{get_courses_data[this.selected_course].data.course.description}}</h3>
   <h4>Course have started at: {{get_courses_data[this.selected_course].data.course.startDate}}
       Ends: {{get_courses_data[this.selected_course].data.course.endDate}}
   </h4>
   <div>
     <md-button class="md-raised md-primary" @click="prev">Previous</md-button>
     <md-button class="md-raised md-primary" @click="next">Next</md-button>
  </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
      name: 'Subject',
      computed: {
        ...mapGetters(['get_courses_data', 'get_courses'])
      },
      data: () => ({
        selected_course: 0,
      }),
      methods: {
        prev() {
          if (this.selected_course != 0){
            this.selected_course = this.selected_course - 1
          }
        },
        next() {
          if (this.selected_course != (this.get_courses.length - 1) ){
            this.selected_course = this.selected_course + 1
          }
        } 
      }
}
</script>

