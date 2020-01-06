<template>
    <div>
    <p>
        DANE ZALOGOWANEGO UŻYTKOWNIKA:
    </p>
    {{ get_user_data }}
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
name: 'UserData',
      computed: {
          ...mapGetters({get_user_data: "get_user_data"})
      },
}
</script>