<template>
  <div class="layout">
    <div class="left-layout">
    <div class="storage-chart">
    <h3>Динамика Запасов</h3>
    <canvas ref="storageChart"></canvas>
  </div>
  <div class="delivery-history">
    <h3>История Заказов</h3>
    <table>
      <thead>
        <tr>
          <th>Компания</th>
          <th>Дата Доставки</th>
          <th>Контакты</th>
          <th>Цена</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ООО "Компания"</td>
          <td>01.01.2023</td>
          <td>+7 (999) 999-99-99</td>
          <td>1000</td>
          <td>Осуществляется Доставка</td>
        </tr>
        <tr>
          <td>ООО "Компания"</td>
          <td>01.01.2023</td>
          <td>+7 (999) 999-99-99</td>
          <td>1000</td>
          <td>Осуществляется Доставка</td>
        </tr>
        <tr>
          <td>ООО "Компания"</td>
          <td>01.01.2023</td>
          <td>+7 (999) 999-99-99</td>
          <td>1000</td>
          <td>Осуществляется Доставка</td>
        </tr>
        <tr>
          <td>ООО "Компания"</td>
          <td>01.01.2023</td>
          <td>+7 (999) 999-99-99</td>
          <td>1000</td>
          <td>Осуществляется Доставка</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  <div class="right-layout">
    <div class="delivery-tracking">
      <div class="card">
        <h1>{{ delivery_title }}</h1>
        <p class="address">{{ delivery_code }}</p>
        <div class="price">
          <p>Цена</p>
        </div>
        <div class="delicery_schedule">
          <p>Расписание</p>
        </div>
        <p class="delivery-status">{{ active_deliveryStatus }}</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
          <div class="arrow"></div>
        </div>
        <p class="timer">{{ timer }}</p>
        <div class="delivery-company">
          <div id="company-name">
            <div class="company-logo">              
              <img :src="delivery_company.logo" width="40" height="40" />
              <div class="company-info">
                <p class="delivery-company-name">{{ delivery_company.name }}</p>
                <p class="delivery-company-email">{{ delivery_company.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="storage-capacity">
      <div class="card">
    <h1>{{ storage_title }}</h1>
    <p class="address">{{ storage_address }}</p>
    <div class="milk">
      <p>Молоко</p>
      <p class="count">{{ milk_count }}</p>
    </div>
    <div class="coffee">
      <p>Кофе</p>
      <p class="count">{{ coffee_count }}</p>
    </div>
    <p class="delivery-status">{{ storage_deliveryStatus }}</p>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
      <div class="arrow"></div>
    </div>
    <p class="timer">{{ timer }}</p>
    <button id="orderDelivery" @click="orderDelivery">Заказать Доставку?</button>
  </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { Chart } from 'chart.js';
import { ref, onMounted } from 'vue';

const storageChart = ref(null);

onMounted(() => {
  const ctx = storageChart.value.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Milk', 'Coffee'], // replace with your actual labels
      datasets: [{
        label: 'Storage Capacity',
        data: [15, 25], // replace with your actual data
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)', // color for 'Milk'
          'rgba(153, 102, 255, 0.2)' // color for 'Coffee'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)', // color for 'Milk'
          'rgba(153, 102, 255, 1)' // color for 'Coffee'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

const delivery_title = 'Активный Заказ'
const storage_title = "Запасы";
const delivery_code = "GCGKH92129";
const active_deliveryStatus = "Осуществляется Доставка";

const delivery_company = {
  name: 'Company Name', 
  email: 'company@mail.com',
  logo: require('@/assets/humans/human2.png' )
};


const storage_address = "ул. Театральный проспект 426";
const  milk_count = "15 штук";
const coffee_count = "25 штук";
const storage_deliveryStatus = "Осуществляется Доставка";
const progress = 75;
const timer = "осталось ~2 часа";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  justify-content: space-between;
  gap: 16px; 
}
.left-layout {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.right-layout {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.storage-chart{
  width: 590px;
  height: 290px;
  background-color: white;
  border: solid 1px rgba(224, 224, 224, 1);
  border-radius: 30px;
  padding: 15px;
}

.delivery-history {
  background-color: white;
  border: solid 1px rgba(224, 224, 224, 1);
  border-radius: 30px;
  padding: 15px;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      border-bottom: 1px solid rgba(224, 224, 224, 1);
      padding: 16px;
      text-align: left;
    }
    th {
      color: rgba(0, 0, 0, 0.54);
      font-weight: 500;
      background-color: rgb(255, 255, 255);
      color: black;
      font-family: "Inter", sans-serif;
    }
    td {
      text-align: center;
    }
    tr:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  }
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 50px;
  padding: 20px;
  margin-bottom: 18px;
  width: fit-content;
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
  .address {
    color: #808080;
    margin-bottom: 20px;
    margin-top: 10px;

  }
  .icon {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #222;
    background-color: #e8e6e6;
  }
  .milk,
  .coffee {
    display: flex;
    gap: 50px;
  }
  .schedule {
    color: #808080;
  }
  .delivery-status {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a0a33c;
    background-color: #e8e6e6;
    width: 290px;
    height: 38px;
    border-radius: 15px;
    margin-top: 32px;
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
#orderDelivery {
  border-radius: 15px;
  background: #dde144;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  width: 290px;
  height: 38px;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
}
.company-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.delivery-company-name {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
}

.delivery-company-email {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
}
</style>
