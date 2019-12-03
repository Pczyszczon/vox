import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import UserData from '@/components/user_data/UserData.vue'

export default {
    components: { 
      VueCal, 
      UserData 
    },
    data: () => ({
        events: [
            {
              start: '2019-11-12 14:00',
              end: '2019-11-12 16:00',
              title: 'Fizyka Teoretyczna',
              class: 'leisure'
            },
            {
              start: '2019-11-13 12:00',
              end: '2019-11-13 14:00',
              title: 'Biologia',
              class: 'leisure'
            },
            {
              start: '2019-11-14 10:00',
              end: '2019-11-14 18:00',
              title: 'WF',
              class: 'sport'
            }
          ]
    }),
  }