<template>
  <aside>
    <h1>Привет, Андрей!</h1>
    <p>Вот общая статистика по вашему бизнесу!</p>
  </aside>
    <MainStatistics />
</template>

<script setup>
import MainStatistics from '@/components/MainStatistics.vue';

</script>

<style lang="scss" scoped>
aside {
  margin-bottom: 20px;
  
}
</style>