import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'

import Simpson1 from './components/Simpson1.vue'
import Simpson2 from './components/Simpson2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Simpson1},
        {path: '/xxx', component: Simpson2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
