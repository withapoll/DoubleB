<template>
  <div>
    <div class="app-icon">
      <img src="@/assets/App Icon dark.png" alt="App icon" />
    </div>
    <div class="description">
      <p>
        <strong>DoubleB</strong>
      </p>
      <p>Сборка от 04.12.2023</p>
    </div>
    <div class="version">
      <i class="fa-solid fa-layer-group"> </i>
      <p>1.0.1</p>
    </div>
    <div class="support">
      <!-- <i class="fa-solid fa-phone"></i> -->
      <a v-bind:href="'https://t.me/withapoll'">Поддержка</a>
      <!-- <i class="fa-solid fa-envelope"></i> -->
      <a v-bind:href="'mailto:withapoll@outlook.com'">Сообщить об ошибке</a>
    </div>
    <div class="dev-contact">
      <a v-bind:href="'https://github.com/withapoll'">
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        v-bind:href="'https://www.youtube.com/channel/UCJYWZuveL_pg_XQL5Y1BLyA'"
      >
        <i class="fa-brands fa-youtube"></i>
      </a>
      <a v-bind:href="'https://instagram.com/withapoll'">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a v-bind:href="'https://t.me/withapoll'">
        <i class="fa-brands fa-telegram"></i>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  img {
    width: 150px;
  }
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  p {
    margin: 0;
  }
}

.version {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  p {
    margin: 0;
    color: #222;
  }
}

.support {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  margin-top: 32px;
  a {
    margin: 0;
    color: #222;
    text-decoration: none;
  }
}
.dev-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 48px;
  a {
    color: inherit;
    text-decoration: none;
    i {
      font-size: 32px;
      color: #222;
    }
  }
}
</style>
