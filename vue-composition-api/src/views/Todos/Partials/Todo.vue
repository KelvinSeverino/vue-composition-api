<!--Componente com unica funcao-->
<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{name: 'todos.edit', params: {id: todo.identify}}">Editar</router-link>
        | <a href="#" @click.prevent="deleteTodo">Deletar</a>
    </div>
</template>

<script>
import TodoService from '@/services/todos.service'

export default {
    name: 'Todo',
    props: {
        todo: {
            require: true,
            type: Object,
        }
    },
    setup(props, {emit}) {
        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                        .then(() => emit('todoDeleted', props.todo)) //emit evento personalizado
        }

        return {
            deleteTodo,
        }
    }
}
</script>