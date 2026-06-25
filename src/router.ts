import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import SkillsView from '@/views/SkillsView.vue'
import CareerView from '@/views/CareerView.vue'

const routes = [
  {
    path: '/',
    redirect: '/projects',
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetailView,
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView,
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
