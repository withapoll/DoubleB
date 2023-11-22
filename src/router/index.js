import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SideBar from '../components/SideBar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, SideBar
  },
  {
    path: '/humans',
    name: 'Humans',
    component: () => import( '../views/HumanTable.vue')
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router