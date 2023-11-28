<template>
  <div class="container">
    <i class="fa-regular fa-face-sad-tear"></i>
    <p>Пока новых уведомлений нет</p>
    <button @click="goToHome">Вернутся на главную</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const goToHome = () => {
  router.push("/");
};

const router = useRouter();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  i {
    font-size: 60px;
    color: #dde144;
  }
  p {
    margin-top: 20px;
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
button {
  display: flex;
  padding: 17px 55px 17px 55px;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #dde144;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  margin-top: 15px;
}
</style>
