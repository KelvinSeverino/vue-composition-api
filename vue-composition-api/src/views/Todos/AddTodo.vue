<template>
    <div>
        <h1>Adicionar Nova Tarefa</h1>

        <form action="#" method="post" @submit.prevent="addTodo">
            <input type="text" name="title" placeholder="Titulo" v-model="todo.name"> <!-- v-model="name" para const sepadamente -->
            <input type="text" name="description" placeholder="Descricao" v-model="todo.description"> <!-- v-model="description" -->
            <button type="submit" :disabled="todo.loading">
                <span v-if="todo.loading">Enviando...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>
import TodoService from '@/services/todos.service'
import { reactive, ref } from 'vue'
import router from '@/router'

export default {
    name: 'AddTodo', //nome do script
    setup() {
        //Constantes que estao vinculadas ao Params do Form pelo v-model
        //const name = ref('')
        //const description = ref('')

        const todo = reactive({
            name: '',
            description: '',
            completed: false,
            loading: false,
        })

        const addTodo = () => {
            todo.loading = true;

            //Criando const com index de cada parametro
            /*const params = {
                name: name.value, //ou todo.name usando o reactive
                description: description.value,
                completed: false,
            }*/

            //passando o .addTodo(params) ou .addTodo({...todo}) pelo reactive
            TodoService.addTodo({...todo}) //Chamando metodo de adicionar tarefa
                        .then(() => router.push({name: 'todos.index'})) //Caso sucesso envia para rota todos.index
                        .finally(() => todo.loading = false)
        }               

        return {
            addTodo,
            todo,
            //name,
            //description
        }
    }
}
</script>