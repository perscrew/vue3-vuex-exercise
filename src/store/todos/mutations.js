export default {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  removeTodo(state, payload) {
    state.todos = state.todos.filter((todo) => todo.id === payload.id);
  },
};
