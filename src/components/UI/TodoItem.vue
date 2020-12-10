<template>
  <div class="todo">
    <h3>{{ todo.name }}</h3>
    <button @click="$emit('remove-todo', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  emits: ["remove-todo"],
};
</script>

<style scoped>
h3 {
  flex-grow: 2;
  text-align: center;
}
.todo {
  display: flex;
  justify-content: center;
  margin: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  height: 55px;
  color: #272b2a;
}
button {
  border-radius: 10px;
  height: 40px;
  margin-right: 5px;
  align-self: center;
  background-color: #dfa539;
  color: white;
  font-size: 20px;
}
</style>