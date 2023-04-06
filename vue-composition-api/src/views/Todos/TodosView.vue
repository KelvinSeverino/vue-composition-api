<template>
    <h1>Lista de Tarefas</h1>

    <div v-show="loading">
        Carregando as tarefas...
    </div>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
        </li>
    </ul>

    <input type="text" v-model="name">
</template>

<script>
import { onMounted, ref } from 'vue'

import TodoService from '@/services/todos.service'

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

        return {
            loading,
            todos,
        }
    }
}
</script>