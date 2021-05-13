<template>
  <div id="app">
    <Home />
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, provide, ref } from "vue";
import initQianKun, { initQianKunState } from "./utils/js/qiankun.js";
import qiankunOptions from "./common/qiankunOptions.js";
import Home from "./views/Home.vue";

let globalStateActions = ref(null);
provide("qiankun-option", qiankunOptions);
provide("qiankun-globalStateActions", globalStateActions);

onBeforeMount(() => {
  initQianKun();
  globalStateActions.value = initQianKunState({
    command: {},
    name: "",
  });
});
onBeforeUnmount(() => {
  globalStateActions.value.offGlobalStateChange();
});

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
<style scoped>
#app {
  height: 100vh;
}
</style>
