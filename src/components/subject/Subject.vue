<template>
  <div class="course-content">
    <h2>{{ get_courses_data[this.selected_course].data.course.name }}</h2>
    <h3>
      {{ get_courses_data[this.selected_course].data.course.description }}
    </h3>
    <h4>
      Course have started at:
      {{ get_courses_data[this.selected_course].data.course.startDate }} Ends:
      {{ get_courses_data[this.selected_course].data.course.endDate }}
    </h4>
    <div>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Course Files</md-dialog-title>
        <a
          target="_blank"
          v-bind:href="a"
          v-for="a in this.get_course_files"
          :key="a"
          >{{ a }}</a
        >
        <Uploader
          :course="this.get_courses_data[this.selected_course].data.course.id"
        />
        <md-dialog-actions>
          <md-button class="md-raised md-primary" @click="showDialog = false"
            >Close</md-button
          >
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

<script src="./Subject.js"></script>
<style lang="scss">
@import "./Subject.scss";
</style>
