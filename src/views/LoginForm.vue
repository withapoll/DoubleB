<template>
  <div id="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const login = () => {
  // Handle login here
};
</script>

<style scoped>
/* Add your styles here */
</style>
