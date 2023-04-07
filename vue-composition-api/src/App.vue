<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{name: 'home'}">Home</RouterLink> |
        <RouterLink :to="{name: 'todos.index'}">Todos</RouterLink> 
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import url('https://pro.fontawesome.com/releases/v6.4.0/css/all.css');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
</style>

<style lang="sass">
@import "./assets/styles/eti.scss"
</style>