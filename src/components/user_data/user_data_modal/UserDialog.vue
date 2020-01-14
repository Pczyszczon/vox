<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Informacje o użytkowniku</md-dialog-title>

            <p>Login: {{ IsDataAvailable(get_user_data.user.login) }} </p>
            <p>Rola: {{ IsDataAvailable(get_user_data.user.role) }} </p>
            <p>Wydział: {{ IsDataAvailable(get_user_data.user.faculty) }} </p>
            <p>Specjalizacja: {{ IsDataAvailable(get_user_data.user.major) }} </p>
            <p>Semestr: {{ IsDataAvailable(get_user_data.user.semester) }} </p>

            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Close</md-button>
            </md-dialog-actions>
        </md-dialog>

        <md-button class="md-primary" @click="showDialog = true">User Information</md-button>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        name: 'userDialog',
        data: () => ({
            showDialog: false
        }),
        methods: {
            IsDataAvailable(data) {
                return data ? data : "Brak informacji"
            }
        },
        computed: {
            ...mapGetters({ get_user_data: "get_user_data" })
        }
    }

</script>


<style scoped src="./UserDialog.css"></style>
