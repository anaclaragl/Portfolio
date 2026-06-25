<script setup>
const gameSkills = [
  { name: 'C#', icon: 'devicon-csharp-plain' },
  { name: 'Unity', icon: 'devicon-unity-plain' },
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'Blender', icon: 'devicon-blender-original' },
  { name: 'GIMP', icon: 'devicon-gimp-plain' },
]

const webSkills = [
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'Javascript', icon: 'devicon-javascript-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain' },
]
</script>

<template>
  <section class="skills-container">
    <h1>Skills</h1>

    <div class="skills-category">
      <h2>Game Development</h2>
      <div class="skills-grid">
        <article v-for="skill in gameSkills" :key="skill.name" class="skill-card">
          <i :class="skill.icon"></i>
          <span>{{ skill.name }}</span>
        </article>
      </div>
    </div>

    <div class="skills-category">
      <h2>Web Development</h2>
      <div class="skills-grid">
        <article v-for="skill in webSkills" :key="skill.name" class="skill-card">
          <i :class="skill.icon"></i>
          <span>{{ skill.name }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
