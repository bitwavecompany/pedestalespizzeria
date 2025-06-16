import { createApp } from 'vue'
import {Icon} from '@iconify/vue'
import '@/assets/main.css'
import App from './AppMain.vue'

const app = createApp(App)
app.component('Icon', Icon)
app.mount('#app')

