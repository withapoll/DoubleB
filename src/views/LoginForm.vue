<template>
  <div class="login-container">
    <div class="login-form">
      <img src="@/assets/login_logo.png" alt="Logo" />
      <form @submit.prevent="submitForm">
        <input type="login" v-model="login" placeholder="Ваш Логин" required />
        <input type="password" v-model="password" placeholder="Пароль" required />
        <button class='login-button' type="submit">Войти</button>
      </form>
      <button class="register" @click="register">Зарегистрироваться</button>
      <button class="forgot-password" @click="forgotPassword">Забыли пароль?😭</button>
    </div>
    <div class="image-container">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const login = ref('');
const password = ref('');

const submitForm = () => {
  // Handle form submission
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  margin-left: 190px;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
 input{
  width: 438px;
  height: 56px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
 }

img {
  width: 250px;
  height: 170px;
  flex-shrink: 0;
}
.image-container {
  /* Style your image container here */
}

.login-button {
  margin-top: 24px;
  width: 438px;
  height: 56px;
  background: #222;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
}

.register {
  width: 438px;
  height: 56px;
  background: #F2F2F2;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  color: #A0A33C;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  margin-bottom: 24px;
}

.forgot-password {
  width: 438px;
  height: 56px;
  background: #F2F2F2;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  color: black;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
}
</style>
