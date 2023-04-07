<!--Componente com unica funcao-->
<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
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