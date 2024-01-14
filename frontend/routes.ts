import Home from './pages/Home.vue'
import About from './pages/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;