export default {
  addTodo(context, payload) {
    context.commit("addTodo", payload);
  },
  removeTodo(context, payload) {
    context.commit("removeTodo", payload);
  },
};
