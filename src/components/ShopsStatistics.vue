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
        <div class="card-header">
          <div class="card-title">
            <h1>{{ storage_title }}</h1>
            <p class="address">{{ storage_address }}</p>
          </div>
          <div class="delivery-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M10.008 20.3532C10.0431 20.4798 10.1027 20.5983 10.1835 20.7018C10.2643 20.8054 10.3647 20.892 10.4789 20.9568C10.5932 21.0215 10.7191 21.0631 10.8495 21.0792C10.9799 21.0953 11.1121 21.0856 11.2387 21.0505C11.3653 21.0155 11.4838 20.9559 11.5873 20.8751C11.6909 20.7943 11.7775 20.6939 11.8422 20.5796C11.907 20.4654 11.9486 20.3394 11.9647 20.2091C11.9808 20.0787 11.9711 19.9465 11.936 19.8199L10.008 20.3532ZM4.2667 6.29987C4.13961 6.26275 4.00641 6.25124 3.87483 6.266C3.74325 6.28076 3.61592 6.32151 3.50021 6.38587C3.38451 6.45023 3.28274 6.53693 3.2008 6.64094C3.11887 6.74494 3.0584 6.86419 3.02292 6.99174C2.98743 7.1193 2.97763 7.25264 2.99408 7.38401C3.01053 7.51539 3.0529 7.64219 3.11875 7.75706C3.18459 7.87193 3.27259 7.97258 3.37764 8.05317C3.48269 8.13377 3.6027 8.1927 3.7307 8.22654L4.2667 6.29987ZM26.9174 20.9665C27.0476 20.9364 27.1704 20.8805 27.2787 20.8021C27.3869 20.7237 27.4783 20.6244 27.5475 20.5101C27.6168 20.3958 27.6623 20.2687 27.6816 20.1365C27.7009 20.0043 27.6935 19.8695 27.6598 19.7402C27.6261 19.6108 27.5668 19.4896 27.4855 19.3835C27.4041 19.2775 27.3023 19.1888 27.1861 19.1228C27.0699 19.0568 26.9417 19.0147 26.809 18.9991C26.6762 18.9835 26.5417 18.9946 26.4134 19.0319L26.9174 20.9665ZM13.596 23.4119C14.0094 24.9052 13.1027 26.4825 11.4974 26.8999L12 28.8345C14.636 28.1505 16.2467 25.4985 15.524 22.8785L13.596 23.4119ZM11.4974 26.8999C9.88137 27.3199 8.26003 26.3812 7.84403 24.8745L5.91603 25.4079C6.63603 28.0145 9.3747 29.5172 12 28.8345L11.4974 26.8999ZM7.84403 24.8745C7.4307 23.3812 8.33737 21.8039 9.9427 21.3865L9.44003 19.4532C6.80403 20.1372 5.19203 22.7879 5.91603 25.4079L7.84403 24.8745ZM9.9427 21.3865C11.5587 20.9665 13.18 21.9052 13.596 23.4119L15.524 22.8785C14.804 20.2719 12.0654 18.7692 9.44003 19.4519L9.9427 21.3865ZM11.936 19.8199L9.0667 9.43321L7.1387 9.96654L10.008 20.3532L11.936 19.8199ZM6.5387 6.92921L4.2667 6.29987L3.7307 8.22654L6.00403 8.85721L6.5387 6.92921ZM9.0667 9.43321C8.89753 8.83301 8.57574 8.28687 8.1327 7.84804C7.68966 7.40921 7.14049 7.09264 6.5387 6.92921L6.0067 8.85721C6.57337 9.01454 6.9947 9.44521 7.1387 9.96654L9.0667 9.43321ZM14.8134 24.1132L26.9174 20.9665L26.4147 19.0319L14.3094 22.1785L14.8134 24.1132Z" fill="black"/>
            <path d="M12.7536 11.64C12.1069 9.29998 11.7843 8.12931 12.3336 7.20798C12.8816 6.28531 14.0883 5.97198 16.5016 5.34398L19.0616 4.67998C21.4749 4.05331 22.6816 3.73864 23.6323 4.27064C24.5829 4.80398 24.9069 5.97331 25.5523 8.31464L26.2389 10.7973C26.8856 13.1373 27.2096 14.308 26.6603 15.2306C26.1109 16.152 24.9043 16.4666 22.4909 17.0933L19.9309 17.7586C17.5176 18.3853 16.3109 18.6986 15.3603 18.1666C14.4096 17.6333 14.0869 16.464 13.4403 14.124L12.7536 11.64Z" stroke="black" stroke-width="1.5"/>
          </svg>
          </div>
        </div>
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
      <div class="arrow">
      </div>
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
  height: 373px;
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

  .delivery-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 65px;
    height: 65px;
    background-color: #D9D9D9;
    svg {
      opacity: 0.6;
  }
  }
  
  .card-title {
  p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    }
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
