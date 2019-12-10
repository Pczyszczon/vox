
<template>
    <div>
        <transition name="modal">
            <div v-if="isOpen">
                <div class="overlay" @click.self="isOpen = false;">
                    <div class="modal">
                        <h1>Informacje o użytkowniku</h1>
                        <h3>Login: <span>{{ IsDataAvailable(get_user_data.data.login) }}</span></h3>
                        <h3>Rola: <span>{{ IsDataAvailable(get_user_data.data.role) }}</span></h3>
                        <h3>Wydział: <span>{{ IsDataAvailable(get_user_data.data.faculty) }}</span></h3>
                        <h3>Specjalizacja: <span>{{ IsDataAvailable(get_user_data.data.major) }}</span></h3>
                        <h3>Semestr: <span>{{ IsDataAvailable(get_user_data.data.semester) }}</span></h3>
                        <!--<p>{{ IsDataAvailable(get_user_data.data.courses) }}</p>-->
                    </div>
                </div>
            </div>
        </transition>
        <button @click="isOpen = !isOpen;">
            {{ isOpen ? "Zamknij" : "Dane użytkownika" }}
        </button>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

  export default {
        name: 'modal',
        data() {
            return {
                isOpen: false,
                
            }
        },
        methods: {
            IsDataAvailable(data) {
                return data ? data : "Brak informacji"
            }


        },
        computed: {
            ...mapGetters({ get_user_data: "get_user_data" }),
        },

}
</script>
<style scoped src="./UserModal.css"></style>
