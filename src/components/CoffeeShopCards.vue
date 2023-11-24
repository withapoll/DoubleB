<template>
  <div class="header">
    <div class="search-container">
      <input type="text" v-model="search" placeholder="Что будем искать?" />
    </div>
    <div class="filter-container">
      <select v-model="filter">
        <option value="all">По умолчанию</option>
        <option value="delivery">По возрастанию</option>
        <option value="pickup">По убыванию</option>
      </select>
    </div>
    <button id="addShop" @click="addShop">Добавить кофейню</button>
  </div>
  <div class="card">
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="rating">{{ rating }}</p>
    <p>Доход</p>
    <p class="income">{{ income }}</p>
    <p>Расписание</p>
    <p class="schedule">{{ schedule }}</p>
    <p class="delivery-status">{{ deliveryStatus }}</p>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
      <div class="arrow"></div>
    </div>
    <p class="timer">{{ timer }}</p>
    <button id="showDetails" @click="showDetails">Подробнее</button>
  </div>
</template>

<script setup>
const title = "Кофейня №19";
const subtitle = "ул. Театральный проспект 426";
const rating = "4.5";
const income = "₽560.000";
const schedule = "с 9:00 до 20:00";
const deliveryStatus = "Осуществляется Доставка";
const progress = 75;
const timer = "осталось ~2 часа";
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 50px;
  padding: 20px;
  margin-top: 32px;
  width: 300px;
  height: fit-content;

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

  .subtitle {
    color: #808080;
    // Add your styles for the subtitle
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
  }

  .schedule {
    color: #808080;
    // Add your styles for the schedule
  }

  .delivery-status {
    color: #a0a33c;
    background-color: #e8e6e6;
    width: 250px;
    height: 38px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    // Add your styles for the delivery status
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

    // Add your styles for the timer
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
  width: 250px;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
}

#addShop {
  background-color: #dde144;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  width: 175px;
  height: 38px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
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

.filter-container {
  display: flex;
  align-items: center;

  select {
    padding: 7px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    font-size: 16px;
    outline: none;
  }
}
</style>
