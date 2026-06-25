<script setup>
import euImage from '@/assets/Images/eu.png'
</script>

<template>
  <section class="presentation">
    <div class="info">
      <div class="profile-pic-container">
        <img :src="euImage" alt="Ana Linhares" id="profilePic" />
      </div>
      <p>
        Hi there! My name is <span class="name">ANA CLARA</span>, a passionate programmer who appreciates the journey of developing experiences.
      </p>
    </div>

    <div class="links">
      <a href="mailto:ag.linhares2@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
      <a href="https://github.com/anaclaragl" target="_blank" rel="noreferrer"><i class="fa fa-github fa-lg"></i></a>
      <a href="https://www.linkedin.com/in/ana-clara-guimaraes-linhares-64b423246" target="_blank" rel="noreferrer"><i class="fa fa-linkedin fa-lg"></i></a>
    </div>
  </section>
</template>
