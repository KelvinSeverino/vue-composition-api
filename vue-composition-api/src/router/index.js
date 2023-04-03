import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodosView from '@/views/Todos/TodosView.vue' //informa o arquivo de template

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { //informa a rota
      path: '/todos',
      name: 'todos.index', //.index para indicar que e listagem
      component: TodosView
    },
  ]
})

export default router
