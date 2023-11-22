<template>
  <aside>
    <div class="greeting">
      <h1>Привет, Андрей!</h1>
      <p>Вот общая статистика по вашему бизнесу!</p>
    </div>
    <div class="profile">
      <div class="top-icons">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-solid fa-bell"></i>
      </div>
      <img src="@/assets/profile_pic.jpg" alt="Profile picture">
      <div class="profile-info">
        <h3>Полунин Андрей</h3>
        <p>polunin.bussiness@mail.com</p>
      </div>
    </div>
  </aside>
  <MainStatistics />
</template>

<script setup>
import MainStatistics from '@/components/MainStatistics.vue';

</script>

<style lang="scss" scoped>
aside {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.greeting h1 {
  color: #000;
  font-family: 'SONGER Condensed', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.top-icons {
  display: flex;
  gap: 20px;
  margin-right: 20px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #eee;
    color: #333;
    font-size: 20px;
  }
}

.profile {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
}

.profile-info {
  h3 {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: black;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    color: #333;
  }
}
</style>