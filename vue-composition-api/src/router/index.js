import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodosView from '@/views/Todos/TodosView.vue' //informa o arquivo de template
import AddTodo from '@/views/Todos/AddTodo.vue'

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
    { //informa a rota
      path: '/todos/create',
      name: 'todos.create', //.create para indicar que e criacao
      component: AddTodo
    },
  ]
})

export default router
