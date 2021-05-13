<template>
  <div class="home-page flex flex-col box-border">
    <Menus />
    <router-view class="flex-1" />
  </div>
</template>
<script setup>
import Menus from "../components/Menus.vue";
</script>
<style scoped>
.home-page {
  height: 100%;
}
</style>
