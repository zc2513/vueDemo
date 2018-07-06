<template>
    <section>
        <div>
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">添加一个代办事项</label>
                <input v-model="newTodoText" id="new-todo" placeholder="E.g 吃">
                <button>添加</button>
            </form>
            <ul>
                <li
                is="todo-item"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                v-on:remove="todos.splice(index, 1)"
                ></li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    components:{
        'todo-item':{ // 局部注册
            template:'\
                        <li>\
                        {{ title }}\
                        <button v-on:click="$emit(\'remove\')">移除当前项</button>\
                        </li>\
                    ',
            props: ['title']    
        }
    },
    data(){
        return{
            newTodoText: '',
            todos: [
            {
                id: 1,
                title: '吃饭饭',
            },
            {
                id: 2,
                title: '睡觉觉',
            },
            {
                id: 3,
                title: '打豆豆'
            }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
}

</script>

