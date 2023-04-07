<template>
    <div>
        <h1>Editar Tarefa</h1>

        <form action="#" method="post" @submit.prevent="editTodo">
            <input type="text" name="title" placeholder="Titulo" v-model="todo.name"> <!-- v-model="name" para const sepadamente -->
            <input type="text" name="description" placeholder="Descricao" v-model="todo.description"> <!-- v-model="description" -->
            <button type="submit" :disabled="todo.loading">
                <span v-if="todo.loading">Aguarde...</span>
                <span v-else>Atualizar</span>
            </button>
        </form>
    </div>
</template>

<script>
import TodoService from '@/services/todos.service'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'

export default {
    name: 'EditTodo', //nome do script
    props: {
        id: {
            require: true,
        }
    },

    setup(props) {
        const todo = reactive({
            name: '',
            description: '',
            completed: false,
            loading: false,
        })

        //Criando montar recurso
        onMounted(async () => {
            todo.loading = true;
            TodoService.getTodo(props.id)
                        .then(response => {
                            console.log(response.data.data)

                            //Passando parametros retornados para objeto reativo TODO
                            const todoR = response.data.data
                            todo.name = todoR.title
                            todo.description = todoR.body
                            todo.completed = todoR.completed == 'S'
                        })
                        .finally(() => todo.loading = false)
        })

        const editTodo = () => {
            todo.loading = true;

            TodoService.editTodo(props.id, {...todo}) //Chamando metodo de adicionar tarefa
                        .then(() => router.push({name: 'todos.index'})) //Caso sucesso envia para rota todos.index
                        .finally(() => todo.loading = false)
        }               

        return {
            editTodo,
            todo,
        }
    }
}
</script>