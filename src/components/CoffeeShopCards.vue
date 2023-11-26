<template>
  <div class="header">
    <div class="search-container">
      <input type="text" v-model="search" placeholder="Что будем искать?" />
    </div>
    <div class="additional-shops">
      <div class="filter-container">
        <select v-model="filter">
          <option value="all">По умолчанию</option>
          <option value="high">По возрастанию</option>
          <option value="low">По убыванию</option>
        </select>
      </div>
      <button id="addShop" @click="showForm = true">
        Добавить кофейню
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
  <div v-if="showForm" class="popup">
    <form @submit.prevent="submitForm">
      <label for="shopName">Название кофейни:</label>
      <input id="shopName" v-model="shopName" required />

      <label for="shopAddress">Адрес кофейни:</label>
      <input id="shopAddress" v-model="shopAddress" required />

      <button type="submit">Отправить</button>
      <button type="button" @click="showForm = false">Закрыть</button>
    </form>
  </div>
  <div class="card">
    <div class="card-header">
      <h1>{{ title }}</h1>
      <p class="rating">{{ rating }}</p>
    </div>
    <p class="shop-address">{{ address }}</p>
    <div class="shop-income">
      <p>Доход</p>
      <p class="income">{{ income }}</p>
    </div>
    <div class="shop-schedule">
      <p>Расписание</p>
      <p class="schedule">{{ schedule }}</p>
    </div>
    <p class="delivery-status">{{ deliveryStatus }}</p>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <p class="timer">{{ timer }}</p>
    <button id="showDetails" @click="showDetails">Подробнее</button>
  </div>
</template>

<script setup>
const title = "Кофейня №19";
const address = "ул. Театральный проспект 42б";
const rating = "4.5";
const income = "₽560.000";
const schedule = "с 9:00 до 20:00";
const deliveryStatus = "Осуществляется Доставка";
const progress = 75;
const timer = "осталось ~2 часа";
import { ref } from "vue";

const showForm = ref(false);
const shopName = ref("");
const shopAddress = ref("");

const submitForm = () => {
  // Handle form submission here
  console.log(shopName.value, shopAddress.value);
  showForm.value = false;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 50px;
  padding: 20px;
  margin-top: 32px;
  width: 350px;
  height: fit-content;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  h1 {
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #646464;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .shop-address {
    color: #646464;
    margin: 16px 0;
  }

  .rating {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #222;
    background-color: #e8e6e6;
    color: #222;
    font-family: "SONGER Grotesque", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .shop-income {
    color: #646464;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;

    & .income {
      color: #000;
    }
  }
  .shop-schedule {
    color: #646464;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;

    & .schedule {
      color: #000;
    }
  }

  .delivery-status {
    color: #a0a33c;
    border-radius: 15px;
    background: #eaeaea;
    margin-left: 10px;
    width: 290px;
    height: 38px;
    margin-top: 16px;
    display: inline-flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  .progress-bar {
    position: relative;
    width: 100%;
    height: 5px;
    background-color: #000;
    border-radius: 50px;
    margin-top: 24px;
    margin-bottom: 16px;

    .progress {
      position: absolute;
      height: 100%;
      background-color: #ffd700;
      border-radius: 50px;
    }
  }

  .timer {
    color: #808080;
    display: flex;
    justify-content: center;
  }
}

#showDetails {
  border-radius: 15px;
  background: #dde144;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  width: 290px;
  padding: 13px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-container {
  display: flex;

  input[type="text"] {
    width: 409px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    font-size: 16px;
    outline: none;
  }
}

.additional-shops {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & #addShop {
    background-color: #dde144;
    border-radius: 15px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    width: 195px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  & .filter-container {
    display: flex;
    align-items: center;

    select {
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      font-size: 16px;
      outline: none;
    }
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  input:focus {
    border-color: #333;
    outline: none;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #dde144;
    color: black;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #d8df05;
  }

  button:active {
    background-color: #d8df05;
  }
}
</style>
