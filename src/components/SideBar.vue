<template>
  <aside>
    <div class="logo">
      <img src="@/assets/ДАБЛБИ.png" alt="Logo" />
    </div>
    <div class="search-container">
      <input type="text" v-model="search" placeholder="Что будем искать?" />
    </div>
    <div class="links">
      <router-link to="/home">
        <i class="fas fa-home"></i>
        Общая Статистика
      </router-link>
      <router-link to="/humans">
        <i class="fa-solid fa-user"></i>
        Персонал
      </router-link>
      <router-link to="/shop">
        <i class="fa-solid fa-store"></i>
        Кофейня
      </router-link>
      <router-link to="/about">
          <i class="fas fa-info"></i>
          О приложении
        </router-link>
    </div>
    <div class="notifications">
      <div class="notification">
        <div class="info">Новое Уведомление</div>
        <div class="label">Ваш заказ для Кофейни №9 принят в работу</div>
        <div class="time">10:30 - 14:30</div>
        <div class="status delivered">
          Закупка
          <!-- need to add button which opens full notification -->
        </div>
        <button id="notification-button" @click="openFullNotification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_413_2055)">
              <path
                d="M14.707 5.63585L20.364 11.2929C20.5515 11.4804 20.6568 11.7347 20.6568 11.9999C20.6568 12.265 20.5515 12.5193 20.364 12.7069L14.707 18.3639C14.5184 18.546 14.2658 18.6468 14.0036 18.6445C13.7414 18.6423 13.4906 18.5371 13.3052 18.3517C13.1198 18.1663 13.0146 17.9155 13.0123 17.6533C13.01 17.3911 13.1108 17.1385 13.293 16.9499L17.243 12.9999H4C3.73478 12.9999 3.48043 12.8945 3.29289 12.707C3.10536 12.5194 3 12.2651 3 11.9999C3 11.7346 3.10536 11.4803 3.29289 11.2927C3.48043 11.1052 3.73478 10.9999 4 10.9999H17.243L13.293 7.04985C13.1975 6.95761 13.1213 6.84726 13.0689 6.72526C13.0165 6.60325 12.9889 6.47204 12.9877 6.33926C12.9866 6.20648 13.0119 6.0748 13.0622 5.9519C13.1125 5.829 13.1867 5.71735 13.2806 5.62346C13.3745 5.52957 13.4861 5.45531 13.609 5.40503C13.7319 5.35475 13.8636 5.32945 13.9964 5.3306C14.1292 5.33176 14.2604 5.35934 14.3824 5.41175C14.5044 5.46416 14.6148 5.54034 14.707 5.63585Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_413_2055">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div class="notification">
        <div class="info">Новое Уведомление</div>
        <div class="label">Ваш заказ для Кофейни №7 доставлен</div>
        <div class="time">10:30 - 14:30</div>
        <div class="status delivered">Доставка</div>
        <button id="notification-button" @click="openFullNotification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_413_2055)">
              <path
                d="M14.707 5.63585L20.364 11.2929C20.5515 11.4804 20.6568 11.7347 20.6568 11.9999C20.6568 12.265 20.5515 12.5193 20.364 12.7069L14.707 18.3639C14.5184 18.546 14.2658 18.6468 14.0036 18.6445C13.7414 18.6423 13.4906 18.5371 13.3052 18.3517C13.1198 18.1663 13.0146 17.9155 13.0123 17.6533C13.01 17.3911 13.1108 17.1385 13.293 16.9499L17.243 12.9999H4C3.73478 12.9999 3.48043 12.8945 3.29289 12.707C3.10536 12.5194 3 12.2651 3 11.9999C3 11.7346 3.10536 11.4803 3.29289 11.2927C3.48043 11.1052 3.73478 10.9999 4 10.9999H17.243L13.293 7.04985C13.1975 6.95761 13.1213 6.84726 13.0689 6.72526C13.0165 6.60325 12.9889 6.47204 12.9877 6.33926C12.9866 6.20648 13.0119 6.0748 13.0622 5.9519C13.1125 5.829 13.1867 5.71735 13.2806 5.62346C13.3745 5.52957 13.4861 5.45531 13.609 5.40503C13.7319 5.35475 13.8636 5.32945 13.9964 5.3306C14.1292 5.33176 14.2604 5.35934 14.3824 5.41175C14.5044 5.46416 14.6148 5.54034 14.707 5.63585Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_413_2055">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: var(--sidebar-width);
  height: 100vh;
  background-color: #222;
  color: var(--light);
  // border-radius: 20px 0px 0px 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 35px;

  img {
    max-width: 110px;
  }
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 250px;
  height: 38px;
  border-radius: 10px;
  border: none;
  background-color: #334b4b;
  color: white;
  font-size: 14px;
  display: inline-flex;
  padding: 12px 20px 12px 19px; // Reduced right padding
  align-items: center;
  gap: 16px;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #3c3d3d;
  }
}
.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 24px;
}
.links a {
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.links a.router-link-exact-active {
  width: 250px;
  color: black;
  background-color: #dde144;
}

.about-app {
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.link-style {
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.link-style.router-link-exact-active {
  width: 250px;
  color: black;
  background-color: #dde144;
}

.notifications {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 30px;
}

.notification {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: left;
  margin-bottom: 10px;
  margin-left: 24px;
  background-color: #334b4b;
  color: white;
  padding: 10px;
  border-radius: 25px;
  width: 250px;
  height: 175px;
  row-gap: 16px;
}

.info,
.label,
.status,
.delivered,
.time {
  font-family: "Inter", sans-serif;
}

.info {
  font-weight: regular;
  font-size: 14px;
  color: #c1c9c9;
}

.label,
.time {
  font-weight: medium;
  font-size: 16px;
}

.status,
.delivered {
  font-weight: medium;
  font-size: 14px;
}

.status {
  width: fit-content;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
}

.delivered {
  background-color: #555555;
  color: #dde144;
}

#notification-button {
  position: absolute;
  align-items: center;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  background-color: #dde144;
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
</style>
