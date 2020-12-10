<template>
  <div v-if="!todos.length">
    <p>
      You have no todo, please create one.
      <router-link to="/add-todo">Add todo</router-link>
    </p>
  </div>
  <div v-else>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="removeTodo"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "../components/UI/TodoItem.vue";
export default {
  components: { TodoItem },
  inject: ["todos", "auth"],
  methods: {
    removeTodo(id) {
      // TODO call remove todo action
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(index, 1);
    },
  },
  beforeRouteEnter(to, from, next) {
    next(
      (vm) => !vm.auth.isUserLogged && vm.$router.replace({ name: "login" })
    );
  },
};
</script>

<style scoped>
p {
  margin-top: 4rem;
  text-align: center;
}
a {
  margin: auto;
  display: inline-block;
}
</style>