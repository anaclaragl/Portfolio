<script setup>
import { computed, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import rangoliticoMenu from '@/assets/Images/rangolitico_menu.png'
import rangolitico6 from '@/assets/Images/rangolitico6.png'
import rangolitico2 from '@/assets/Images/rangolitico2.png'
import rangolitico5 from '@/assets/Images/rangolitico5.png'
import rangolitico1 from '@/assets/Images/rangolitico1.png'
import luneMenu from '@/assets/Images/LuneMenu.png'
import lune1 from '@/assets/Images/lune1.png'
import luneTrailer from '@/assets/Images/luneTrailer.mp4'
import dialogueImage from '@/assets/Images/dialogue.png'
import dialogue2 from '@/assets/Images/dialogue2.jpg'

const route = useRoute()
const router = useRouter()
const currentId = computed(() => String(route.params.id || ''))

onMounted(async () => {
  await nextTick()
  const target = document.querySelector('.project-full')
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})

const projects = {
  rangolitico: {
    title: 'Rangolithical',
    year: '2025',
    image: rangoliticoMenu,
    description: 'Rangolithical is a cooperative puzzle game about two cooking students who earn a promotion and explore a mysterious tower hiding the legendary Holy Recipe.',
    evaluation: 'I was responsible for UI design, UI programming, and gameplay programming, contributing to the game from concept to execution.',
    links: [
      { label: 'Github', href: 'https://github.com/Octopodium/Rangolitico' },
      { label: 'Itch.io', href: 'https://octopodium.itch.io/rangolitico' },
      { label: 'Trailer', href: 'https://youtu.be/W3XFr5R3Qx0?si=GKGdXPKCkmPfihD6' },
    ],
    assets: [
      rangolitico6,
      rangolitico2,
      rangolitico5,
      rangolitico1,
    ],
  },
  lune: {
    title: 'Lune',
    year: '2025',
    image: luneMenu,
    description: 'Lune is a game about a white moth on a quest to retrieve light and restore the moon for all mothkind. By carrying a lantern that changes color, the moth can interact with the world around it.',
    evaluation: 'I worked on the main menu, art, programming, and developed the lantern mechanic. I also helped with level design and delivered a full loop gameplay experience.',
    links: [
      { label: 'Github', href: 'https://github.com/Octopodium/lune' },
    ],
    assets: [
      lune1,
      luneTrailer,
    ],
  },
  dialog: {
    title: 'Dialogue Tool',
    year: '2025',
    image: dialogueImage,
    description: 'A tool to create dialogue trees without relying on code, with a visual node-based interface and support for serializable data structures compatible with Unity.',
    evaluation: 'I designed and developed the editor interface, allowing the creation of dialogue branches, choices, and conditions inside Unity.',
    links: [
      { label: 'Github', href: 'https://github.com/Octopodium/Rangolitico/tree/main/Dish-Dwellers-TCC/Assets/Scripts/Sistema%20de%20Dialogo' },
    ],
    assets: [
      dialogueImage,
      dialogue2,
    ],
  },
}

const project = computed(() => projects[currentId.value] || null)
const goBack = () => router.push({ name: 'projects' })
</script>

<template>
  <Transition name="slide-in" mode="out-in">
    <section class="project-full" v-if="project">
      <img class="project-header-image" :src="project.image" :alt="project.title" />
      <h2>{{ project.title }}</h2>
      <h3>{{ project.year }}</h3>
      <div class="project-links">
        <a v-for="link in project.links" :key="link.label" :href="link.href" target="_blank" rel="noreferrer">
          <img :alt="link.label" :src="`https://img.shields.io/badge/${encodeURIComponent(link.label)}-blue?style=flat-square`" />
        </a>
      </div>
      <p>{{ project.description }}</p>
      <span style="color: var(--orange);">Personal Evaluation</span>
      <p>{{ project.evaluation }}</p>
      <div class="gridgalery">
        <template v-for="asset in project.assets" :key="asset">
          <img v-if="asset.endsWith('.png') || asset.endsWith('.jpg')" :src="asset" />
          <video v-else controls :src="asset" style="width: 100%; max-width: 600px;" />
        </template>
      </div>
    </section>
  </Transition>
</template>
