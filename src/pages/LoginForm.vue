<template>
  <section>
    <form @submit.prevent="login">
      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  inject: ["auth"],
  methods: {
    login() {
      // TODO call login action.
      this.auth.isUserLogged = true;
      this.$router.replace({ name: "todos" });
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  width: 100%;
}

form {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 1.5rem;
}

form > * {
  margin: 0.5rem;
  width: 100%;
  height: 30px;
  border-radius: 5px;
}
</style>