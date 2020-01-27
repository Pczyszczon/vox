<template>
  <div>
   <h2>{{get_courses_data[this.selected_course].data.course.name}}</h2>
   <h3>{{get_courses_data[this.selected_course].data.course.description}}</h3>
   <h4>Course have started at: {{get_courses_data[this.selected_course].data.course.startDate}}
       Ends: {{get_courses_data[this.selected_course].data.course.endDate}}
   </h4>
   <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Course Files</md-dialog-title>
            <a target="_blank" v-bind:href="a" v-for="a in this.get_course_files" :key="a">{{ a }}</a>
            <Uploader :course="this.get_courses_data[this.selected_course].data.course.id"/>
            <md-dialog-actions>
                <md-button class="md-raised md-primary" @click="showDialog = false">Close</md-button>
            </md-dialog-actions>
        </md-dialog>

        <md-button class="md-raised md-primary" @click="open">Files</md-button>
    </div>
   <div>
     <md-button class="md-raised md-primary" @click="prev">Previous</md-button>
     <md-button class="md-raised md-primary" @click="next">Next</md-button>
  </div>
  </div>
</template>

<script>
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
</script>

<style scoped>
.md-dialog {
    width: 600px;
    background-color: white;
    margin: 0px auto;
    padding: 20px;
    font-size: 14pt;
    font-family: frutiger;
}
.md-dialog-title {
    margin: 0px auto;
    padding: 20px;
    font-weight: bold;
}
</style>

