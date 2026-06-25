<script setup>
import { useRouter } from 'vue-router'
import rangoliticoImage from '@/assets/Images/rangolitico_menu.png'
import luneImage from '@/assets/Images/LuneMenu.png'
import dialogueImage from '@/assets/Images/dialogue.png'

const router = useRouter()

const projects = [
  {
    id: 'rangolitico',
    title: 'Rangolithical',
    subtitle: 'Game made in 2025',
    image: rangoliticoImage,
  },
  {
    id: 'lune',
    title: 'Lune',
    subtitle: '48-hour Game Jam project',
    image: luneImage,
  },
  {
    id: 'dialog',
    title: 'Dialogue Tool',
    subtitle: 'Editor tool for dialogue trees',
    image: dialogueImage,
  },
]

const openProject = (project) => {
  router.push({ name: 'project-detail', params: { id: project.id } })
}
</script>

<template>
  <section class="projects-container">
    <h1>Projects</h1>
    <div class="projects">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <button type="button" class="project-link" @click="openProject(project)">
          <img class="project-card-image" :src="project.image" :alt="project.title" />
          <h2>{{ project.title }}</h2>
          <p>{{ project.subtitle }}</p>
        </button>
      </article>
    </div>
  </section>
</template>
