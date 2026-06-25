<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import euImage from '@/assets/Images/eu.png'

const router = useRouter()
const route = useRoute()

const activeTab = computed(() => {
  if (route.path.startsWith('/projects')) return 'projects'
  if (route.path.startsWith('/skills')) return 'skills'
  if (route.path.startsWith('/career')) return 'career'
  return 'projects'
})

const goToTab = (tab) => {
  const routeMap = {
    projects: '/projects',
    skills: '/skills',
    career: '/career',
  }
  router.push(routeMap[tab])
}
</script>

<template>

  <div class="presentation">
    <div class="info">
      <div class="profile-pic-container">
        <img :src="euImage" alt="Ana Linhares" id="profilePic">
      </div>
      <p>Hi there! My name is <span class="name">ANA LINHARES</span>, a passionate programmer who appreciate the journey of developing experiences.</p>
    </div>
    <div class="links">
      <a href="mailto:ag.linhares2@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
      <a href="https://github.com/anaclaragl" target="_blank" rel="noreferrer"><i class="fa fa-github fa-lg"></i></a>
      <a href="https://www.linkedin.com/in/ana-clara-guimaraes-linhares-64b423246" target="_blank" rel="noreferrer"><i class="fa fa-linkedin fa-lg"></i></a>
    </div>
  </div>

  <div class="content">
    <div class="content-items">
      <a @click.prevent="goToTab('projects')" :class="{ active: activeTab === 'projects' }">Projects</a>
      <a @click.prevent="goToTab('skills')" :class="{ active: activeTab === 'skills' }">Skills</a>
      <a @click.prevent="goToTab('career')" :class="{ active: activeTab === 'career' }">Career</a>
    </div>
  </div>

  <Transition name="fade-slide" mode="out-in">
    <router-view :key="$route.fullPath" />
  </Transition>

  <footer>
    Ana Clara Guimarães Linhares | 2026
  </footer>
</template>
