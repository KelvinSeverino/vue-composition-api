<template>
    <h1>
        Lista de Tarefas
        <router-link :to="{name: 'todos.create'}"><font-awesome-icon icon="fa-solid fa-circle-plus" /></router-link>
    </h1>

    <div v-show="loading">
        Carregando as tarefas...
    </div>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <todo :todo="todo" 
            @todoDeleted="removeTodoList"
            @todoUpdated="todoUpdated"/>
        </li>
    </ul>
</template>

<script>
import { onMounted, ref } from 'vue'

import TodoService from '@/services/todos.service'
import Todo from './Partials/Todo.vue'

export default {
    name: 'Todos',
    setup() {
        const todos = ref([])

        const loading = ref(false)

        onMounted(() => {
            loading.value = true

            TodoService.getAll()
                    .then(response => { //Quando da sucesso
                        console.log(response)
                        todos.value = response.data.data //recebe retorno da API
                    })
                    .catch(error => console.log(error)) //Falha na faixa de 400 ou 500
                    .finally(() => loading.value = false) //Quando finaliza, idependente de erro ou falha
        })

        const removeTodoList = (todo) => {
            const indexRemove = todos.value.indexOf(todo) //Pega o Index do objeto
            todos.value.splice(indexRemove, 1) //remove o index informado acima
        }

        const todoUpdated = (todo) => {            
            const indexUpdate = todos.value.indexOf(todo) //Pega o Index do objeto
            todos.value[indexUpdate] = todo //Atualiza os dados do Index do objeto
        }

        return {
            loading,
            todos,
            removeTodoList,
            todoUpdated
        }
    },

    //Declara componentes a serem utilizados
    components: {
        Todo
    }
}
</script>