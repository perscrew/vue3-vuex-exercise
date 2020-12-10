<template>
  <header>
    <nav>
      <div>
        <span>Todo app</span>
        <ul>
          <li>
            <router-link to="/todos">Todo list</router-link>
          </li>
          <li>
            <router-link to="/add-todo">Add todo</router-link>
          </li>
        </ul>
        <button v-if="auth.isUserLogged" @click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  inject: ["auth"],
  methods: {
    logout() {
      // TODO dispatch logout action
      this.auth.isUserLogged = false;
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #18574c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin-top: -50px;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: white;
  border-color: #82d2d4;
  background-color: #525253;
}

span {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 10px;
  display: inline-block;
}

button {
  margin-right: 10px;
  margin-top: -50px;
  float: right;
  background-color: #525253;
  color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
}
</style>