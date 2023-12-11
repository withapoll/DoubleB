<template>
  <div class="header">
    <div class="search-container">
      <input type="text" v-model="search" placeholder="Что будем искать?" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
