<template>
  <aside>
    <div class="greeting">
      <h1>{{ greeting }}</h1>
      <p>{{ description }}</p>
    </div>
    <div class="profile">
      <div class="top-icons">
        <i class="fa-solid fa-moon" @click="darkModOn"></i>
        <router-link to="/notifications">
          <i class="fa-solid fa-bell"></i>
        </router-link>
      </div>
      <img src="@/assets/profile_pic.jpg" alt="Profile picture" />
      <div class="profile-info">
        <h3>{{ username }}</h3>
        <p>{{ email }}</p>
      </div>
      <div class="sign-out">
        <i id="sign-out-icon" class="fa-solid fa-right-from-bracket" @click="signOut"></i>
      </div>
    </div>
  </aside>
  <ShopPage />
  <ShopsStatistics />
</template>

<script setup>
import ShopPage from "@/components/ShopPage.vue";
import ShopsStatistics from "@/components/ShopsStatistics.vue";
import { useRouter } from "vue-router";
const greeting = "Привет, Андрей!";
const description = "Вот общая статистика по кофейни!";
const username = "Андрей Летчфорд";
const email = "a.letchford@double.com";

const router = useRouter();
const signOut = () => {
  router.push("/");
};
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
  font-family: "SONGER Condensed", sans-serif;
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
  a {
    text-decoration: none; /* this property removes the underline */
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
    font-family: "Inter", sans-serif;
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
