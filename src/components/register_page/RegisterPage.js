import axios from "axios"

export default {
    name: "register",
    data() {
      return {
        loading: false,
        user: {
          login: "",
          password: "",
          faculty: "",
          major: "",
          semester: ""
        }
      };
    },
    methods: {
      createAccount() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/");
        }, 5000);
      }
    }
  };