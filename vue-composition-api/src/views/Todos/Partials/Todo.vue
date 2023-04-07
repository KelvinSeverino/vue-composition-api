<!--Componente com unica funcao-->
<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{name: 'todos.edit', params: {id: todo.identify}}">Editar</router-link>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: {
            require: true,
            type: Object,
        }
    }
}
</script>