import Vue from 'vue'
import FileUpload from 'v-file-upload'
import {mapActions} from "vuex"
Vue.use(FileUpload)

export default {
  data () {
    return {
      url: 'http://issp-slack.herokuapp.com/Files/' + this.course + '/?file=',
      headers: {'access-token': '<your-token>'},
      filesUploaded: []
    }
  },
  methods: {
    ...mapActions(['getFilesList']),
    thumbUrl (file) {
      return file.myThumbUrlProperty
    },
    onFileChange (file) {
      this.fileUploaded = file
      this.getFilesList(this.course)
    }
  },
  props: {
    course: {
          type: Number,
          default: 0
      }
  }
}