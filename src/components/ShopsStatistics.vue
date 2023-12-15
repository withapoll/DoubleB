<template>
  <div class="layout">
    <div class="left-layout">
    <div class="storage-chart">
    <h3>Динамика Запасов</h3>
    <canvas ref="storageChart"></canvas>
  </div>
  <div class="delivery-history">
    <table>
      <thead>
        <tr>
          <th><i class="fas fa-building"></i> Компания</th>
          <th><i class="fas fa-calendar-alt"></i> Дата Доставки</th>
          <th><i class="fas fa-phone"></i> Контакты</th>
          <th><i class="fas fa-money-bill-wave"></i> Цена</th>
          <th><i class="fas fa-truck"></i> Статус</th>
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
      </tbody>
    </table>
  </div>
  </div>
  <div class="right-layout">
    <div class="delivery-tracking">
      <div class="card">
        <div class="card-header">
          <h1>{{ delivery_title }}</h1>
          <div class="delivery-code">
            <p>Полная закупка</p>
        </div>
        </div>
        <p class="address">{{ delivery_code }}</p>
        <div class="price">
          <p>Цена</p>
          <p>{{ delivery_price }}</p>
        </div>
        <div class="delivery_schedule">
          <p>Расписание</p>
          <p>{{ delivery_schedule }}</p>
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

  // gradient for the fill color
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(75, 192, 192, 0.5)');
  gradient.addColorStop(1, 'rgba(75, 192, 192, 0.1)');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'], // replace with actual labels
      datasets: [
        {
          label: 'Молоко',
          data: [10, 15, 7, 10, 15], // replace with actual data
          backgroundColor: "rgba(251, 255, 91, 1)", 
          borderRadius: 10,
        },
        {
          label: 'Кофе',
          data: [16, 22, 13, 21, 25], // replace with actual data
          backgroundColor: "rgba(221, 225, 68, 1)",  
          borderRadius: 10,
        },
        {
          label: 'Закуски ',
          data: [28, 35, 25, 35, 45], // replace with actual data
          backgroundColor: "rgba(185, 188, 49, 1)",  
          borderRadius: 10,
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            color: '#4f4f4f',
            font: {
              size: 14
            }
          }
        },
        x: {
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            color: '#4f4f4f',
            font: {
              size: 14
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: '#4f4f4f',
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          backgroundColor: '#efefef',
          titleColor: '#4f4f4f',
          bodyColor: '#4f4f4f',
          footerColor: '#4f4f4f'
        }
      }
    }
  });
});


const delivery_title = 'Активный Заказ'
const storage_title = "Запасы";
const delivery_code = "GCGKH92129";
const active_deliveryStatus = "Осуществляется Доставка";
const delivery_price = '35 000₽';
const delivery_schedule = "с 12 по 15 октября";

const delivery_company = {
  name: 'Company Name', 
  email: 'company@mail.com',
  logo: require('@/assets/humans/human2.png' )
};


const storage_address = "ул. Театральный проспект 42б";
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
  height: 380px;
  background-color: white;
  border: solid 1px rgba(224, 224, 224, 1);
  border-radius: 30px;
  padding: 15px;
  h3{
    margin-bottom: 24px;
  }
}

.delivery-history {
  margin-top: 20px;
  background-color: white;
  border: solid 1px rgba(224, 224, 224, 1);
  border-radius: 30px;
  padding: 15px;
  height: 350px;
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
  margin-bottom: 20px;
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
 
.card-header {
  display: flex;
  .delivery-code p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4496E1;
    background-color: #e8e6e6;
    width: 140px;
    height: 38px;
    border-radius: 15px;
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
  margin-top: 20px;
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

.price,
.delivery_schedule {
  font-family: 'Inter', sans-serif;
  display: flex;
  gap: 35px;
}
</style>
