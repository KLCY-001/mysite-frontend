import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import PostCreateView from '../views/PostCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/post/:id', name: 'post', component: PostView },
    { path: '/create', name: 'create', component: PostCreateView},
  ]
})

export default router