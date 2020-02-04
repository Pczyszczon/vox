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

        <div id="center-value">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Want To Be Signed</th>
                </tr>
                <tr v-for="value in attendance_all[this.selected_course].attendances[0].attendanceList.attendances">
                    <td>{{ (value && value.user)? value.user.id : '' }}</td>
                    <td>{{ (value && value.user)? value.user.login : '' }}</td>
                    <td>{{ value.wantsToBeSigned  }} </td>
                </tr>

            </table>
        </div>
        Attendance date that is chosen:
        <p>{{ chosen_date }} </p>

        <select class="selectpicker" data-live-search="true" v-model="chosen_date" @change="onChange()">
            <option :value="value" v-text="value" v-for="value in get_attendance[this.selected_course].data[0]"></option>
        </select>

        <div>
            <md-dialog :md-active.sync="showDialog">
                <md-dialog-title>Course Files</md-dialog-title>
                <a target="_blank"
                   v-bind:href="a"
                   v-for="a in this.get_course_files"
                   :key="a">{{ a }}</a>
                <Uploader :course="this.get_courses_data[this.selected_course].data.course.id" />
                <md-dialog-actions>
                    <md-button class="md-raised md-primary" @click="showDialog = false">Close</md-button>
                </md-dialog-actions>
            </md-dialog>

            <md-button class="md-raised md-primary" @click="open">Files</md-button>
            <md-button class="md-raised md-primary" @click="">Sign Me!</md-button>
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
