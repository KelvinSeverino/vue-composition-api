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
