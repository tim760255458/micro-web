<template>
  <div class="flex">
    <div class="flex-1 box-border bg-green-100" id="vueContainer"></div>
    <div class="flex-1 box-border bg-blue-100" id="reactContainer"></div>
  </div>
</template>
<script setup>
import { inject, onMounted } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { addMicroApps } from "../utils/js/qiankun.js";

const { vueAppOption, reactAppOption } = inject("qiankun-option");
const globalStateActions = inject("qiankun-globalStateActions");
const router = useRouter();
let microApps = [];

const handlerGlobalStateChange = (state) => {
  const { command, value } = state.command;
  switch (command) {
    case "navigate":
      router.push(value);
      break;
  }
};

onMounted(() => {
  microApps = addMicroApps([vueAppOption, reactAppOption]);
  globalStateActions.value.onGlobalStateChange(handlerGlobalStateChange);
});

// 使用导航守卫，只有全部卸载当前子应用后才跳转，避免未卸载完成导致的bug
onBeforeRouteLeave((to, from) => {
  if (microApps.length) {
    const microAppsUnMountPromise = microApps.map((microApp) =>
      microApp.unmount()
    );
    Promise.all(microAppsUnMountPromise)
      .then(() => {
        microApps = [];
        return true;
      })
      .catch(() => {
        return false;
      });
  } else {
    return true;
  }
});
</script>
